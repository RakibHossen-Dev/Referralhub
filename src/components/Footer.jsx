import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSquareWhatsapp,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#12141D] py-5">
      <div className="flex md:flex-row flex-col justify-between w-11/12 max-w-[1000px] mx-auto ">
        <div>
          <p className="text-gray-400 mb-5">
            Simplify your referral process and start <br /> growing with
            ReferralHub today
          </p>
          <div className="flex items-center gap-3">
            <FaFacebook className="text-white bg-gray-600 text-3xl rounded-full p-1.5"></FaFacebook>
            <FaGithub className="text-white bg-gray-600 text-3xl rounded-full p-1.5"></FaGithub>
            <FaTwitter className="text-white bg-gray-600 text-3xl rounded-full p-1.5"></FaTwitter>
            <FaLinkedinIn className="text-white bg-gray-600 text-3xl rounded-full p-1.5"></FaLinkedinIn>
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div>
            <p className="text-lg text-white mb-2 font-semibold">Company</p>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link to="/">Server</Link>
              <Link to="/">Resources</Link>
              <Link to="/">About US</Link>
            </div>
          </div>
          <div>
            <p className="text-lg text-white mb-2 font-semibold">Help</p>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link to="/">Customer Support</Link>
              <Link to="/">Terms & Conditions</Link>
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-400 w-11/12 mx-auto my-8" />
      <p className="text-white text-center text-sm w-11/12 mx-auto">
        &#169; Copyright-2025, Alright reserved by ReferralHub
      </p>
    </footer>
  );
};

export default Footer;
