import { Menu, Search } from "lucide-react";
import { Button } from "./ui/button";

const ClosedSidebar = ({setIsOpen}) => {
  return (
    <div className="h-full w-full flex flex-col  gap-10 justify-start items-center bg-gradient-to-r from-[#25233c] to-[#2a2843]">
      <Menu className="cursor-pointer mt-6 bg-[#ccc] h-9 w-9 p-2 rounded-md shadow-2xl shadow-black hover:bg-gray-200" onClick={() => setIsOpen(true)} />
      <div className="flex flex-col gap-6 justify-start items-center">
      {/* <Button
        className="h-10"
        variant={"primary"}
        size="xs"
        onClick={() => setIsOpen(true)}
      >
        <Search />
      </Button> */}
      </div>
    </div>
  );
};

export default ClosedSidebar;
