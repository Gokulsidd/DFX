"use client";

import { useState, useEffect } from "react";

export default function SectionContainer({ sections }) {
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    // Open all sections by default
    const initialState = sections.reduce((acc, section) => {
      acc[section.id] = true; // All sections start open
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
      {/* Mobile View: Stacked Sections */}
      <div className="block md:hidden h-full overflow-y-scroll w-full">
        {sections.map((section) => (
          <div
            key={section.id}
            className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Clickable Title for Expand/Collapse */}
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-100 p-4 hover:bg-gray-200 transition-colors duration-200"
              onClick={() => handleTabToggle(section.id)}
            >
              <h3 className="text-md font-medium">{section.title}</h3>
              <span className="text-gray-600 text-sm">
                {openSections[section.id] ? "▲" : "▼"}
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
      <div className="hidden md:flex h-full w-full gap-4 transition-all duration-300">
        {sections.map((section) =>
          openSections[section.id] ? (
            <div
              key={section.id}
              className="transition-all h-full duration-300 ease-in-out bg-white shadow-lg rounded-lg overflow-hidden flex-1"
              style={{ width: `${100 / openSectionsCount}%` }}
            >
              {/* Clickable Title for Expand/Collapse */}
              <div
                className="flex justify-between items-center cursor-pointer bg-gray-100 p-2 hover:bg-gray-200 transition-colors duration-200"
                onClick={() => handleTabToggle(section.id)}
              >
                <h3 className="text-md font-medium">{section.title}</h3>
                <span className="text-gray-600 text-sm">
                  {openSections[section.id] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform -rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 pt-2 text-gray-700">
                {section.content || "Section content placeholder"}
              </div>
            </div>
          ) : (
            // Show section title when collapsed for re-opening
            <div
              key={section.id}
              className="transition-all duration-300 ease-in-out bg-gray-200 text-gray-700 cursor-pointer p-4 flex items-center justify-center shadow-lg rounded-lg hover:bg-gray-300"
              style={{
                width: "60px",
              }}
              onClick={() => handleTabToggle(section.id)}
            >
              <span className="rotate-90 text-sm font-medium">
                {section.title}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
