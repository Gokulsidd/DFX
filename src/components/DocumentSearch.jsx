import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function DocumentSearch({ onDocumentSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    // TODO: Implement search logic
    const mockDoc = { id: "123", name: "Example Document" };
    onDocumentSelect(mockDoc);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="space-y-4 h-28">
        <h2 className="text-xl font-bold">DFX</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Enter Document ID or Pack"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button size="lg" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      <hr />
      <div className="h-full">
        <h2 className="text-xl font-bold">Documents List</h2>
      </div>
    </div>
  );
}
