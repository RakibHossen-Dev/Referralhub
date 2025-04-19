import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-blue-50">
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 gap-8 py-10 ">
        <div className="lg:ml-48 space-y-5 w-11/12 mx-auto  lg:w-auto">
          <h2 className="text-4xl capitalize font-semibold ">
            Ai-powered referral platform for <br className="hidden lg:block" />{" "}
            growing brands
          </h2>
          <p>
            Empower your existing customer base to spread the word, while our
            smart AI assistant guides you through creating and managing referral
            campaigns that actually convert.
          </p>
          <button className="bg-[#305AFF] text-white px-4 py-2 rounded-md  flex items-center text-sm gap-2 hover:bg-blue-600 transition duration-200 cursor-pointer">
            Get Started <FaArrowRightLong />
          </button>
        </div>
        <img src="/hero1.jpg" alt="" className="rounded-md" />
      </div>
    </div>
  );
};

export default Banner;
