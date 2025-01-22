const Footer = () => {
  return (
    <div className="w-[100%] bg-secondary mt-4 px-12 py-8 flex flex-row">
      <div className="basis-1/3 flex flex-col pl-8">
        <span className="text-2xl font-extrabold tracking-wide">Roomify</span>
        <span className="mt-4">
          Connecting renters and landlords seamlessly.
        </span>
      </div>
      <div className="basis-1/3 flex flex-col gap-y-2  pl-8">
        <span className="text-2xl font-extrabold tracking-wide">Links</span>
        <div className="flex flex-col gap-y-2">
          <a href="mt-4">Home</a>
          <a href="mt-4">Listings</a>
          <a href="mt-4">Account</a>
        </div>
      </div>
      <div className="basis-1/3 flex flex-col  pl-8">
        <span className="text-2xl font-extrabold tracking-wide">
          Contact Us
        </span>
        <span className="mt-4">Email: support@roomify.com</span>
        <span className="mt-4">Phone: +123456789</span>
      </div>
    </div>
  );
};
export default Footer;
