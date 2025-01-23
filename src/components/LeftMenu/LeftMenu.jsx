const Menu = [
  {
    id: 1,
    title: "personal information",
    link: "#",
  },
  {
    id: 2,
    title: "profile",
    link: "#",
  },
  {
    id: 3,
    title: "properties",
    link: "#",
  },
  {
    id: 4,
    title: "favorite",
    link: "#",
  },
  {
    id: 5,
    title: "messages",
    link: "#",
  },
  {
    id: 6,
    title: "notifications",
    link: "#",
  },
  {
    id: 7,
    title: "support",
    link: "#",
  },
];

const LeftMenu = () => {
  return (
    <div className="w-[250px] h-[calc(100vh-5rem)] bg-secondary">
      <div className="m-4">
        <ul>
          {Menu.map((item) => {
            return (
              <li
                key={item.id}
                className="mt-4 hover:pl-2 hover:border-l-2 hover:border-blue-500 transition-all duration-300 "
              >
                <a href={item.link} className="text-lg capitalize ">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default LeftMenu;
