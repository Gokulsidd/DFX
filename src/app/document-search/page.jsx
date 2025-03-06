"use client";

import ClosedSidebar from "@/components/ClosedSidebar";
import DocumentSearch from "@/components/DocumentSearch";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useSections from "@/hooks/useSections";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

const DocumentDashboard = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const { sections, loading } = useSections(selectedDoc);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-500/10">
      {/* Fixed Document Search Section */}
      <Card className={`w-full z-20  md:w-auto transition-all duration-200 ease-in-out ${isOpen ? 'md:w-1/4 min-w-[300px] md:shadow-soft' : 'md:w-[5%] min-w-[40px] flex flex-col  justify-start items-center' }`}>
        {isOpen ? <DocumentSearch onDocumentSelect={setSelectedDoc} onCloseClick={setIsOpen} /> : <ClosedSidebar setIsOpen={setIsOpen} />}
      </Card>

      {/* Dynamic Sections Container */}
      <Card className="flex-1 overflow-hidden h-full">
        {loading ? (
          <div className="h-full flex gap-x-4">
            <Skeleton className="h-full w-14" />
            <Skeleton className="h-full w-14" />
          </div>
        ) : (
          <SectionContainer sections={sections} />
        )}
      </Card>
    </div>
  );
};

export default DocumentDashboard;
