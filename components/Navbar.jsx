import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex px-4 py-2">
      <div className="flex items-center border-2 rounded-full overflow-hidden w-96">
        <input placeholder="Search for music" className="p-2 px-4 outline-none text-xs w-full bg-smoke" />
        <IoMdSearch className="text-lg w-10" />
      </div>
      
    </div>
  );
};

export default Navbar;
