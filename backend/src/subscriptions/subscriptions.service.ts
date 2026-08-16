import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubscriptionsService {
  constructor(private prisma: PrismaService) {}

  getPlans() {
    return [
      {
        id: 'FREE',
        name: 'Starter / Free',
        price: 0,
        currency: 'INR',
        billing: 'Forever Free',
        description: 'Essential revision notes and sample practice questions.',
        features: [
          'Access to Class 5-10 Basic Study Notes',
          '5 Practice Quizzes per month',
          '2 Downloadable Worksheets per subject',
          'Standard mind maps viewer',
          'Student Dashboard analytics',
        ],
        highlight: false,
      },
      {
        id: 'PRO_STUDENT',
        name: 'Pro Student',
        price: 499,
        currency: 'INR',
        billing: 'per month or ₹2,999/yr',
        description: 'Full interactive access to CBSE Question Bank, unlimited quizzes & AI analytics.',
        features: [
          'Unlimited interactive quizzes with instant deep analytics',
          'Full access to all Class 5-10 Mind Maps & Deep Dive Notes',
          'Unlimited CBSE worksheets with detailed step-by-step solutions',
          'CBSE Question Paper Generator & Model Exam Papers',
          'Full Bloom Taxonomy & Competency diagnostics',
          'Gamification streak shields, leaderboard ranks & special badges',
          'Ad-free uninterrupted learning experience',
        ],
        highlight: true,
      },
      {
        id: 'PRO_TEACHER',
        name: 'Educator & School',
        price: 1499,
        currency: 'INR',
        billing: 'per month or ₹9,999/yr',
        description: 'For teachers and institutions to generate board papers, assign homework and track student cohorts.',
        features: [
          'All Pro Student features included',
          'Custom Question Paper Builder with official CBSE blueprint',
          'One-click Printable Exam Papers & Answer Keys export',
          'Create and assign worksheets & quizzes to entire classrooms',
          'Real-time class performance monitoring & weak topic alerts',
          'Dedicated school administrative management',
        ],
        highlight: false,
      },
    ];
  }

  async getMySubscription(userId: string) {
    return this.prisma.subscription.findFirst({
      where: { userId, status: 'ACTIVE' },
      orderBy: { createdAt: 'desc' },
    });
  }

  async subscribe(userId: string, planName?: string) {
    const pName = planName || 'PRO_STUDENT';
    const amountMap: Record<string, number> = {
      FREE: 0,
      PRO_STUDENT: 499,
      PRO_TEACHER: 1499,
      SCHOOL: 9999,
    };

    const amountPaid = amountMap[pName] !== undefined ? amountMap[pName] : 499;

    // Create 1-year active subscription record in PostgreSQL
    const subscription = await this.prisma.subscription.create({
      data: {
        userId,
        planName: pName,
        status: 'ACTIVE',
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year PRO validity
        amountPaid,
      },
    });

    return subscription;
  }
}
