import { Navbar, LeftMenu, ContentArea } from "../components";

const Dashboard = () => {
  return (
    <div>
      <Navbar className="w-[100%]" />
      {/* <Footer /> */}
      <div className="w-[100%] bg-yellow-500 flex flex-row">
        <LeftMenu />
        <ContentArea />
      </div>
    </div>
  );
};
export default Dashboard;
