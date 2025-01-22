import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectiveRoute = ({ children }) => {
  return <Navigate to="/landing" />;
  // ToDo
  // const { profile } = useSelector((store) => store.user);
  // if (!profile) {
  //   return <Navigate to="/landing" />;
  // }
  // return children;
};
export default ProtectiveRoute;
