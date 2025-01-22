const Footer = () => {
  return (
    <div className="w-[100%] bg-secondary px-12 py-8 flex flex-row">
      <div className="basis-1/3 flex flex-col">
        <span className="text-2xl font-extrabold tracking-normal">Roomify</span>
        <span className="mt-4">
          Connecting renters and landlords seamlessly.
        </span>
      </div>
      <div className="basis-1/3 flex flex-col">
        <span className="text-2xl font-extrabold tracking-normal">Links</span>
        <span className="mt-4">Home</span>
        <span className="mt-4">Listings</span>
      </div>
      <div className="basis-1/3 flex flex-col">
        <span className="text-2xl font-extrabold tracking-normal">
          Contact Us
        </span>
        <span className="mt-4">Email: support@roomify.com</span>
        <span className="mt-4">Phone: +123456789</span>
      </div>
    </div>
  );
};
export default Footer;
