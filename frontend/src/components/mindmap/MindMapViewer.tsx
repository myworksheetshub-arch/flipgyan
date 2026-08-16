'use client';

import React, { useState } from 'react';
import { MindMapNode } from '@/types';
import { ChevronRight, ChevronDown, Sparkles, ZoomIn, ZoomOut, Maximize2, Minimize2, Lightbulb } from 'lucide-react';

interface MindMapViewerProps {
  data: MindMapNode;
  title?: string;
}

export function MindMapViewer({ data, title }: MindMapViewerProps) {
  const [collapsedNodes, setCollapsedNodes] = useState<Record<string, boolean>>({});
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedNode, setSelectedNode] = useState<string | null>(data?.topic || null);

  const toggleNode = (nodePath: string) => {
    setCollapsedNodes((prev) => ({
      ...prev,
      [nodePath]: !prev[nodePath],
    }));
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(1.4, Math.max(0.7, Number((prev + delta).toFixed(1)))));
  };

  const renderBranch = (node: MindMapNode, path: string, depth: number = 0) => {
    const isCollapsed = !!collapsedNodes[path];
    const hasChildren = node.children && node.children.length > 0;
    const isSelected = selectedNode === node.topic;

    // Depth-based color accents
    const getBadgeStyle = (d: number) => {
      if (d === 0) {
        return 'bg-gradient-to-r from-brand-600 to-sky-500 text-white font-extrabold text-sm sm:text-base px-4 py-2.5 shadow-lg shadow-brand-500/25 border-2 border-white ring-4 ring-brand-100';
      }
      if (d === 1) {
        return 'bg-gradient-to-r from-indigo-50 to-sky-50 text-indigo-900 font-bold text-xs sm:text-sm px-3.5 py-2 border border-indigo-200 shadow-sm hover:border-indigo-400';
      }
      if (d === 2) {
        return 'bg-amber-50 text-amber-900 font-semibold text-xs px-3 py-1.5 border border-amber-200 shadow-xs hover:border-amber-400';
      }
      return 'bg-slate-50 text-slate-800 font-medium text-xs px-2.5 py-1 border border-slate-200 hover:bg-slate-100';
    };

    return (
      <div key={path} className="flex items-center my-2 transition-all">
        <div className="flex items-center group">
          <div
            onClick={() => {
              setSelectedNode(node.topic);
              if (hasChildren) toggleNode(path);
            }}
            className={`rounded-2xl cursor-pointer transition-all duration-200 flex items-center gap-2 ${getBadgeStyle(
              depth,
            )} ${isSelected ? 'ring-2 ring-brand-500 scale-105' : 'hover:scale-[1.02]'}`}
          >
            {depth === 0 && <Sparkles className="w-4 h-4 fill-amber-300 text-amber-300 animate-spin-slow" />}
            {depth === 1 && <Lightbulb className="w-3.5 h-3.5 text-indigo-600" />}
            <span>{node.topic}</span>
            {hasChildren && (
              <span className="p-0.5 rounded-full bg-white/40 hover:bg-white/70 text-slate-700">
                {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            )}
          </div>
        </div>

        {/* Children Branches */}
        {hasChildren && !isCollapsed && (
          <div className="relative pl-6 sm:pl-8 ml-2 sm:ml-4 border-l-2 border-brand-200/80 space-y-2 py-1">
            {node.children!.map((child, idx) => renderBranch(child, `${path}-${idx}`, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-slate-900/5 rounded-2xl border border-slate-200/80 p-4 sm:p-6 overflow-hidden">
      {/* Mind Map Controls Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
              {title || 'Visual Mind Map & Concept Hierarchy'}
            </h4>
            <p className="text-[11px] text-slate-500">Click any branch to expand, collapse, and explore core concepts.</p>
          </div>
        </div>

        {/* Zoom & Expand Controls */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
          <button
            onClick={() => handleZoom(0.1)}
            title="Zoom In"
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 transition"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-bold text-slate-500 px-1">{Math.round(zoomLevel * 100)}%</span>
          <button
            onClick={() => handleZoom(-0.1)}
            title="Zoom Out"
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 transition"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <div className="w-px h-4 bg-slate-200 mx-1" />
          <button
            onClick={() => setCollapsedNodes({})}
            title="Expand All"
            className="px-2 py-1 text-[11px] font-semibold text-brand-700 hover:bg-brand-50 rounded-lg transition"
          >
            Expand All
          </button>
        </div>
      </div>

      {/* Mind Map Canvas */}
      <div className="overflow-x-auto py-6 px-2 min-h-[300px] flex items-center bg-radial from-white to-slate-50/50 rounded-xl border border-slate-200/60 shadow-inner">
        <div style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'left center' }} className="transition-transform duration-200">
          {renderBranch(data, 'root', 0)}
        </div>
      </div>

      {/* Selected Node Inspector */}
      {selectedNode && (
        <div className="mt-4 p-3 bg-brand-50/80 border border-brand-200/60 rounded-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-brand-900">
            <span className="font-bold">Focused Concept:</span>
            <span className="bg-white px-2.5 py-0.5 rounded-md font-semibold text-brand-700 shadow-xs border border-brand-200">
              {selectedNode}
            </span>
          </div>
          <span className="text-[11px] text-brand-600 font-medium">Concept nodes sync with CBSE Board Syllabus</span>
        </div>
      )}
    </div>
  );
}
