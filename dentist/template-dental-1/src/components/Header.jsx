import React from "react";
import logo from "../assets/images/logoHeader.png";
import logoEmail from "../assets/images/Group 23email.png";
import logoInsta from "../assets/images/Group 7insta.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-l from-[#0C74AE] to-[#0B4768] px-5 md:px-0 ">
      <div className="w-full md:w-[90%]  mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row gap-5 items-center py-4 md:p-5">
          <img src={logo} className="bg-white rounded-lg px-3" />
          <h2 className="text-white font-bold text-3xl  hidden md:block ">
            Your Logo Here
          </h2>
        </div>

        <div className="flex flex-row justify-between items-center     ">
          <div className="flex flex-row items-center justify-center gap-3 m-5 md:mr-20 ">
            <img src={logoEmail} />
            <h6 className="text-white font-barlow  text-xl hidden md:block">
              support@yourbrand.com
            </h6>
          </div>
          <div className="flex flex-row  gap-3">
            <img src={logoInsta} />
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0001 0C7.16358 0 0 7.19353 0 16.067C0 24.0254 5.76835 30.6164 13.3316 31.8927V19.419H9.47191V14.9302H13.3316V11.6204C13.3316 7.78002 15.6674 5.68724 19.0795 5.68724C20.7137 5.68724 22.1181 5.80952 22.5258 5.86338V9.87759L20.1593 9.87874C18.304 9.87874 17.9464 10.7638 17.9464 12.0631V14.9279H22.3731L21.7957 19.4167H17.9464V32C25.8627 31.0325 32 24.2736 32 16.0624C32 7.19353 24.8364 0 16.0001 0Z"
                fill="white"
              />
            </svg>

            <svg
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 0C6.9409 0 0 7.16479 0 16C0 24.8352 6.9409 32 15.5 32C24.0591 32 31 24.8352 31 16C31 7.16479 24.0591 0 15.5 0ZM22.5771 12.4751C22.584 12.6326 22.5873 12.7908 22.5873 12.9497C22.5873 17.8025 19.0089 23.3984 12.4649 23.3987C10.4557 23.3987 8.58607 22.7908 7.01161 21.749C7.28999 21.783 7.57333 21.7998 7.86021 21.7998C9.52715 21.7998 11.0612 21.2129 12.279 20.2278C10.7215 20.198 9.40842 19.1362 8.95526 17.677C9.17214 17.72 9.39517 17.7434 9.62388 17.7434C9.94861 17.7434 10.2632 17.6982 10.5621 17.614C8.93421 17.2776 7.7079 15.7925 7.7079 14.0142C7.7079 13.9976 7.7079 13.9827 7.70837 13.9673C8.18778 14.2424 8.73602 14.408 9.31973 14.4265C8.36446 13.7686 7.73652 12.6438 7.73652 11.3696C7.73652 10.6968 7.91272 10.0664 8.21829 9.52368C9.97273 11.7458 12.5947 13.2073 15.5516 13.3608C15.4905 13.0918 15.4591 12.8115 15.4591 12.5234C15.4591 10.4961 17.0525 8.85132 19.0172 8.85132C20.0405 8.85132 20.9648 9.29785 21.6141 10.0117C22.4246 9.84668 23.1857 9.54102 23.8732 9.12036C23.6071 9.97754 23.0433 10.6968 22.3087 11.1516C23.0284 11.0627 23.7143 10.8657 24.3517 10.5732C23.8756 11.3098 23.2718 11.9568 22.5771 12.4751Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
