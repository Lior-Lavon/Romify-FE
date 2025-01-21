import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-[100%] p-[2rem]">
      <span className="text-4xl bold tracking-wide font-bold">
        Find Your Perfect Rental
      </span>
      <div className="w-[100%] mt-6 flex justify-between gap-4">
        <div className="w-full">
          <div className="group relative">
            <input
              type="text"
              placeholder="Search properties or location"
              className="w-[100%] h-[60px] text-xl transition-all duration-300 rounded-2xl border border-black px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
            />
            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 text-xl" />
          </div>
        </div>
        {/* search button */}
        <button className="bg-primary text-white py-2 px-8 rounded-2xl text-1xl tracking-wider hover:bg-primary/80 transition-all duration-300">
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;
