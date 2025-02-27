"use client";

import DocumentSearch from "@/components/DocumentSearch";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useSections from "@/hooks/useSections";
import { useState } from "react";

const DocumentDashboard = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const { sections, loading } = useSections(selectedDoc);

  return (
    <div className="flex flex-col md:flex-row h-full p-4 gap-4 bg-gray-500/10">
      {/* Fixed Document Search Section */}
      <Card className="w-full md:w-1/4 min-w-[300px] p-4">
        <DocumentSearch onDocumentSelect={setSelectedDoc} />
      </Card>

      {/* Dynamic Sections Container */}
      <Card className="flex-1 p-4 overflow-hidden h-full">
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
