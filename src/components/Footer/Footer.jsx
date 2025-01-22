const Footer = () => {
  return (
    <div className="w-[100%] bg-secondary mt-4 px-4 py-8 flex flex-col gap-4 sm:flex-row">
      <div className="sm:basis-1/3 flex flex-col sm:pl-8 ">
        <span className="text-1xl sm:text-2xl font-extrabold tracking-wide">
          Roomify
        </span>
        <span className="text-sm mt-2">
          Connecting renters and landlords seamlessly.
        </span>
      </div>
      <div className="sm:basis-1/3 flex flex-col gap-y-1 sm:pl-8">
        <span className="text-1xl sm:text-2xl font-extrabold tracking-wide">
          Links
        </span>
        <div className="flex flex-col ">
          <a href="mt-4">Home</a>
          <a href="mt-4">Listings</a>
          <a href="mt-4">Account</a>
        </div>
      </div>

      <div className="sm:basis-1/3 flex flex-col gap-y-1 sm:pl-8">
        <span className="text-1xl sm:text-2xl font-extrabold tracking-wide">
          Contact Us
        </span>
        <div className="flex flex-col">
          <span className="">Email: support@roomify.com</span>
          <span className="">Phone: +123456789</span>
        </div>
      </div>

      {/* <div className="basis-1/3 flex flex-col pl-8">
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
      </div> */}
    </div>
  );
};
export default Footer;
