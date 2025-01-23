const Menu = [
  {
    id: 1,
    title: "Privacy Policy",
    link: "#",
  },
  {
    id: 2,
    title: "Terms Of Service",
    link: "#",
  },
  {
    id: 3,
    title: "Contact Us",
    link: "#",
  },
];

const ContentBottomMenu = () => {
  return (
    <div className="w-[100%] h-[4rem] bg-secondary">
      <ul className="h-full flex flex-row gap-20 items-center justify-center ml-8">
        {Menu.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContentBottomMenu;
