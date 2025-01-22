import { Card } from "../";
import Image1 from "../../assets/room-1.jpeg";

const Listings = [
  {
    id: 1,
    image: Image1,
    title: "Modern Family Home",
    description:
      "Located in a serene neighborhood, this home offers 4 badrooms and 3 bathrooms.",
  },
  {
    id: 2,
    image: Image1,
    title: "Cozy City Apartment",
    description:
      "Enjoy urban living with this 2-badrooms apartment in the heart of downtown.",
  },
  {
    id: 3,
    image: Image1,
    title: "Luxury Condo",
    description:
      "This luxury condo features a modern interior with stunning views.",
  },
  {
    id: 4,
    image: Image1,
    title: "Luxury Condo",
    description:
      "This luxury condo features a modern interior with stunning views.",
  },
  {
    id: 5,
    image: Image1,
    title: "Luxury Condo",
    description:
      "This luxury condo features a modern interior with stunning views.",
  },
];

const Listing = () => {
  return (
    <div className="w-[100%] px-[1rem] sm:px-[2rem] ">
      <span className="text-1xl sm:text-3xl bold tracking-wide font-bold">
        Featured Listings
      </span>

      {/* listing */}
      <div className="w-[100%] p-2 flex flex-wrap gap-4">
        {Listings.map((elm) => {
          return <Card key={elm.id} listing={elm} />;
        })}
      </div>
    </div>
  );
};
export default Listing;
