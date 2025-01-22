import { FaHome } from "react-icons/fa";

const MenuItems = [
  {
    id: 1,
    text: "home",
    link: "#",
  },
  {
    id: 2,
    text: "listing",
    link: "#",
  },
  {
    id: 3,
    text: "account",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <div className="h-[5rem] w-[100%] bg-white flex items-center justify-between px-4 ">
      {/* logo */}
      <div className="flex items-center gap-2 text-2xl sm:text-3xl sm:gap-4">
        <FaHome className="" />
        <h1 className="tracking-normal font-medium">Romify</h1>
      </div>
      {/* menu */}
      <ul className="hidden sm:flex items-center justify-between text-2xl w-[240px] md:w-[300px]">
        {MenuItems.map((item) => {
          return (
            <li
              key={item.id}
              className="capitalize cursor-pointer hover:text-gray-600 transition-all duration-300"
            >
              {item.text}
            </li>
          );
        })}
      </ul>
      {/* register / login */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="bg-primary text-white py-2 px-2 rounded-lg text-sm tracking-wider hover:bg-primary/80 transition-all duration-300 sm:px-4 sm:text-lg">
          Login
        </button>
        <button className="bg-primary text-white py-2 px-2 rounded-lg text-sm tracking-wider hover:bg-primary/80 transition-all duration-300 sm:px-4 sm:text-lg">
          Register
        </button>
      </div>
    </div>
  );
};
export default Navbar;
