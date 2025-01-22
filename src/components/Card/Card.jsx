const Card = ({ listing }) => {
  return (
    <div className="w-[420px] bg-white border shadow-lg rounded-lg cursor-pointer">
      <img src={listing.image} alt="" className="rounded-lg"></img>
      <div className="flex flex-col mt-2 p-2">
        <span className="text-2xl font-bold">{listing.title}</span>
        <span className="text-lg mt-1">{listing.description}</span>
      </div>
    </div>
  );
};
export default Card;
