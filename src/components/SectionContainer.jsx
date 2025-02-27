"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CollapsibleSection from "./CollapsibleSection";

export default function SectionContainer({ sections }) {
  const [openTab, setOpenTab] = useState(sections[0]?.id);

  const handleTabToggle = (id) => {
    setOpenTab((prev) => (prev === id ? null : id));
  };

  return (
    <TooltipProvider>
      {/* Mobile View: Vertical Accordion */}
      <div className="block md:hidden w-full">
        <Accordion type="single" value={openTab} onValueChange={setOpenTab}>
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger className="text-lg font-semibold">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 overflow-y-scroll max-h-[380px]">
                  {section.content || "Section content placeholder"}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Desktop View: Horizontal Tabs with Right-Side Tooltip */}
      <div className="hidden md:flex flex-row h-full w-full gap-x-2">
        {sections.map((section) => (
          <Tooltip key={section.id}>
            <TooltipTrigger asChild>
              <div>
                <CollapsibleSection
                  title={section.title}
                  content={section.content}
                  isOpen={openTab === section.id}
                  onToggle={() => handleTabToggle(section.id)}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-blue-100 text-blue-600 border-transparent hover:bg-blue-200 shadow-lg" side="left"> {/* 👈 Tooltip appears on the right */}
              {section.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
