"use client"

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function SectionContainer({ sections }) {
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768
    // Open all sections by default
    const initialState = sections.reduce((acc, section) => {
      acc[section.id] = isDesktop; // All sections start open
      return acc;
    }, {});
    setOpenSections(initialState);
  }, [sections]);

  const handleTabToggle = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId], // Toggle section open/close
    }));
  };

  // Count open sections for dynamic width in desktop view
  const openSectionsCount = Object.values(openSections).filter(
    (isOpen) => isOpen
  ).length;

  return (
    <div className="w-full h-full transition-all duration-300">
      <h2 className="text-lg font-semibold bg-[#ddd] py-2 px-4 border-b-2 border-gray-400/50 text-slate-700">Document Details</h2>
      {/* Mobile View: Stacked Sections */}
      <div className="block md:hidden h-full overflow-y-scroll w-full">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white overflow-hidden"
          >
            {/* Clickable Title for Expand/Collapse */}
            <div
              className={`font-semibold bold flex justify-between items-center cursor-pointer bg-gray-100 p-4  transition-colors duration-200 ${openSections[section.id] ? 'border-b-4 border-[#6264a7]' : 'border-b-2 border-gray-200'}`}
              onClick={() => handleTabToggle(section.id)}
            >
              <h3 className="text-md font-medium">{section.title}</h3>
              <span className="text-gray-600 text-sm">
                {openSections[section.id] ? <ChevronUp /> : <ChevronDown />}
              </span>
            </div>

            {/* Content (Show only if open) */}
            {openSections[section.id] && (
              <div className="p-4 pt-2 text-gray-700">
                {section.content || "Section content placeholder"}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View: Side-by-Side Columns */}
      <div className="hidden md:flex gap-1 h-full w-full  transition-all duration-300 bg-gray-200 pr-4">
        {sections.map((section) =>
          openSections[section.id] ? (
            <div
              key={section.id}
              className="transition-all h-full duration-300 ease-in-out bg-white border border-r-gray-300"
              style={{ width: `${100 / openSectionsCount}%` }}
            >
              {/* Clickable Title for Expand/Collapse */}
              <div
                className="flex justify-between items-center cursor-pointer bg-gray-100 p-2  border-b-[3px] border-[#6264a7] transition-colors duration-200 relative"
                onClick={() => handleTabToggle(section.id)}
              >
                <h3 className="text-md font-semibold text-gray-600">{section.title}</h3>
                <Button size='xs' className="text-[#6264a7] hover:text-slate-100 h-8 w-8 absolute top-6 -right-4 z-50 bg-slate-100 shadow-lg ">
                  {openSections[section.id] ? (
                    <ChevronLeft className="font-bold" />
                  ) : (
                    <ChevronRight />
                  )}
                </Button>
              </div>

              {/* Content */}
              <div className="p-3 text-gray-700">
                {section.content || "Section content placeholder"}
              </div>
            </div>
          ) : (
            // Show section title when collapsed for re-opening
            <div
              key={section.id}
              className="transition-all duration-300 ease-in-out group bg-gray-100 text-gray-700 cursor-pointer flex items-center justify-center border border-r-gray-300 hover:bg-[#cecfe3]"
              style={{
                width: "40px",
              }}
              onClick={() => handleTabToggle(section.id)}
            >
              <span className="rotate-90  text-nowrap text-md font-medium group-hover:text-[#6264a7]  group-hover:scale-105">
                {section.title}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
