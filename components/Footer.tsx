import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="mx-auto text-gray-800 dark:text-white">
        <div className="mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a href="#" className={"transition-colors hover:text-yellow-500"} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" className={"transition-colors hover:text-yellow-500"} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="#" className={"transition-colors hover:text-yellow-500"} target="_blank" rel="noreferrer">
              <FaBehance />
            </a>
          </div>
          <div className="text-center text-sm text-gray-500">
            &copy;
            <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> JSBP_Dev</span>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 py-6 mt-4">
        <div className="text-center text-sm text-gray-500">{new Date().getFullYear()} All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
