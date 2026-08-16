import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookmarksService {
  constructor(private prisma: PrismaService) {}

  async getUserBookmarks(userId: string, itemType?: string) {
    const where: any = { userId };
    if (itemType) where.itemType = itemType;

    return this.prisma.bookmark.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async addBookmark(userId: string, data: { itemType: string; itemId: string; title: string; subtitle?: string; metadataJson?: string }) {
    const existing = await this.prisma.bookmark.findUnique({
      where: {
        userId_itemType_itemId: {
          userId,
          itemType: data.itemType,
          itemId: data.itemId,
        },
      },
    });

    if (existing) {
      // Toggle off if already bookmarked
      await this.prisma.bookmark.delete({
        where: { id: existing.id },
      });
      return { bookmarked: false, message: 'Bookmark removed' };
    }

    const bookmark = await this.prisma.bookmark.create({
      data: {
        userId,
        itemType: data.itemType,
        itemId: data.itemId,
        title: data.title,
        subtitle: data.subtitle,
        metadataJson: data.metadataJson,
      },
    });

    return { bookmarked: true, bookmark };
  }

  async removeBookmark(userId: string, id: string) {
    const bookmark = await this.prisma.bookmark.findFirst({
      where: { id, userId },
    });

    if (!bookmark) throw new NotFoundException('Bookmark not found');
    await this.prisma.bookmark.delete({ where: { id } });
    return { message: 'Bookmark removed' };
  }
}
