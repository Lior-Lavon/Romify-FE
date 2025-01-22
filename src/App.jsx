import { Navbar, Search, Listing, Footer } from "./components";

const App = () => {
  return (
    <div>
      <div className="mx-4">
        <Navbar />
        <Search />
        <Listing />
      </div>
      <Footer />
    </div>
  );
};
export default App;
