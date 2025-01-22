import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/localStorage";

const ProtectiveRoute = ({ children }) => {
  // return <Navigate to="/landing" />;
  // ToDo
  // const { profile } = useSelector((store) => store.user);
  // if (!profile) {
  //   return <Navigate to="/landing" />;
  // }

  // Tmp
  let user = getUserFromLocalStorage();
  if (!user) {
    return <Navigate to="/landing" />;
  }

  return children;
};
export default ProtectiveRoute;
