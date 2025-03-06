'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CollapsibleSection({ title, content, isOpen, onToggle }) {
  return (
    <div
      className={`flex flex-col md:flex-row h-full transition-all duration-300 ${
        isOpen ? 'md:flex-1' : 'md:w-[50px]'
      }`}
    >
      {/* Collapse/Expand Button */}
      <Button
        variant="teritary"
        size="sm"
        className="hidden md:flex items-center justify-center h-full w-[30px] border-r relative group "
        onClick={onToggle}
      >
        {/* Chevron Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </div>

        {/* Title on Hover */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-2 py-1 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 whitespace-nowrap ${
            isOpen ? 'hidden' : 'block'
          }`}
        >
          {title}
        </div>
      </Button>

      {/* Section Content */}
      <div className={`flex-1 p-4 h-full ${isOpen ? 'block' : 'hidden'}`}>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div>{content || 'Section content placeholder'}</div>
      </div>
    </div>
  );
}