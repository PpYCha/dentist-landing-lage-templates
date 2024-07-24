import React from "react";

const Hero = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto mt-10 md:mt-20 px-5 ">
      <div className="flex items-center gap-5 ">
        <svg
          width="190"
          height="29"
          viewBox="0 0 190 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 11.0765L19.0993 10.3568L14.994 0L10.8888 10.3568L0 11.0765L8.3516 18.1976L5.61105 29L14.994 23.0442L24.3771 29L21.6365 18.1976L30 11.0765Z"
            fill="#D9A111"
          />
          <path
            d="M110 11.0765L99.0993 10.3568L94.994 0L90.8888 10.3568L80 11.0765L88.3516 18.1976L85.6111 29L94.994 23.0442L104.377 29L101.637 18.1976L110 11.0765Z"
            fill="#D9A111"
          />
          <path
            d="M70 11.0765L59.0993 10.3568L54.994 0L50.8888 10.3568L40 11.0765L48.3516 18.1976L45.6111 29L54.994 23.0442L64.3771 29L61.6365 18.1976L70 11.0765Z"
            fill="#D9A111"
          />
          <path
            d="M150 11.0765L139.099 10.3568L134.994 0L130.889 10.3568L120 11.0765L128.352 18.1976L125.611 29L134.994 23.0442L144.377 29L141.637 18.1976L150 11.0765Z"
            fill="#D9A111"
          />
          <path
            d="M190 11.0765L179.099 10.3568L174.994 0L170.889 10.3568L160 11.0765L168.352 18.1976L165.611 29L174.994 23.0442L184.377 29L181.637 18.1976L190 11.0765Z"
            fill="#D9A111"
          />
        </svg>

        <p className="text-[#a3a3a3] font-bold font-sans">4.9/5 star reviews</p>
      </div>
      <div className="mt-10">
        <h3 className="font-barlow font-bold text-2xl text-[#024f6c]">
          DONE FOR YOU, HANDS OFF
        </h3>
      </div>
      <div className="mt-2">
        <h1 className="font-serif  text-4xl md:text-6xl leading-[50px] text-[#0485ab]">
          Get whiter teeth in 10 minutes, or your money back. Guaranteed.
        </h1>
      </div>
      <div className="mt-3">
        <ul>
          <li className="flex gap-3 justify-start items-start py-2 ">
            <svg
              width="36"
              height="27"
              viewBox="0 0 36 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2311 0L12.8886 17.0666L5.13144 8.76402L0 13.5866L12.5321 27L36 5.18458L31.2311 0Z"
                fill="#024F6C"
              />
            </svg>
            <p className="font-barlow text-base  md:text-2xl">
              Proven fast results for thousands of people
            </p>
          </li>
          <li className="flex gap-3 justify-start items-start py-2 ">
            <svg
              width="36"
              height="27"
              viewBox="0 0 36 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2311 0L12.8886 17.0666L5.13144 8.76402L0 13.5866L12.5321 27L36 5.18458L31.2311 0Z"
                fill="#024F6C"
              />
            </svg>
            <p className="font-barlow text-base  md:text-2xl">
              Science based with data to back it up
            </p>
          </li>
          <li className="flex gap-3 justify-start items-start py-2 ">
            <svg
              width="36"
              height="27"
              viewBox="0 0 36 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2311 0L12.8886 17.0666L5.13144 8.76402L0 13.5866L12.5321 27L36 5.18458L31.2311 0Z"
                fill="#024F6C"
              />
            </svg>
            <p className="font-barlow text-base  md:text-2xl">
              Healthy to use, unlike other competitors
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
