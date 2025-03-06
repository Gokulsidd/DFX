import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export default function DocumentSearch({ onDocumentSelect, onCloseClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleCloseClick = () => {
    onCloseClick(false);
  };

  const handleSearch = async () => {
    // TODO: Implement search logic
    const mockDoc = { id: "123", name: "Example Document" };
    onDocumentSelect(mockDoc);
  };

  return (
    <div className="flex flex-col space-y-4 h-full  md:border-r-2 md:border-gray-200/60 bg-gray-100">
      <div className="space-y-2 h-18 px-4 py-2">
        <div className="flex p-2 justify-between items-center gap-2 ">
          <h2 className="text-lg font-semibold">DFX</h2>
          <Button
            className="float-right p-2  h-10 "
            variant={"outline"}
            size="sm"
            onClick={handleCloseClick}
          >
            <X />
          </Button>
        </div>
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
      <div className="w-full h-full ">
        <h2 className="text-lg font-semibold bg-[#ddd] px-4 py-2 border-b-2 border-gray-400/50 text-slate-700">
          Documents List
        </h2>
      </div>
    </div>
  );
}
