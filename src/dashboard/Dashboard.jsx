import { Navbar, LeftMenu, Content } from "../components";

const Dashboard = () => {
  return (
    <div>
      <Navbar className="w-[100%]" />
      {/* <Footer /> */}
      <div className="w-[100%] bg-white flex flex-row">
        <LeftMenu />
        <Content />
        {/* <Content /> */}
      </div>
    </div>
  );
};
export default Dashboard;
