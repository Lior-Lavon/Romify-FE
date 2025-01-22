import { LandingPage } from "./pages";
import ProtectiveRoute from "./dashboard/ProtectiveRoute";
import {
  BrowserRouter,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import history from "./utils/history";

const App = () => {
  return (
    // <HistoryRouter history={history}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectiveRoute>
              <LandingPage />
            </ProtectiveRoute>
          }
        ></Route>
        <Route path="/landing" element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>

    // </HistoryRouter>
  );
};
export default App;
