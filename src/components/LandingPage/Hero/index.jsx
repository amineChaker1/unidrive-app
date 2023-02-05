import React from "react";
import { useState } from "react";
const Hero = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <header
        className="font-poppins min-h-screen"
        style={{
          backgroundImage:
            'url("https://www.studydrive.net/images/backgrounds/background-blue.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <nav className="flex justify-between items-center py-3 px-9 md:py-6 md:px-16">
          <div className="flex items-center">
            <img src="/src/assets/logo1.png" className="w-16 mr-2" alt="logo" />
            <p className="text-5xl font-bold text-primary hidden md:block">
              Unidrive
            </p>
          </div>

          <div className="menu hidden md:block">
            <ul className="flex">
              <li>
                <a
                  href=""
                  className=" text-primary mr-3 py-4 px-5 font-bold rounded-md  border-none"
                >
                  Log in
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="bg-primary text-white mr-3 py-4 px-5 font-bold rounded-md  border-none"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
          <div onClick={() => setToggle(!toggle)} className=" block md:hidden">
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-primary relative"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-primary relative"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <div className={`${toggle ? "hidden" : ""} `}>
              <ul className="flex flex-col absolute ">
                <li>
                  <a
                    href=""
                    className=" text-primary m-3 py-4 px-5 font-bold rounded-md  border-none"
                  >
                    Log in
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="bg-primary text-white m-3 py-4 px-5 font-bold rounded-md  border-none"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          style={{ minHeight: "80vh" }}
          className="hero flex flex-col justify-center items-center gap-4  text-center px-2 
        "
        >
          <div className="lg:px-28 xl:px-40">
            <h2
              className="font-bold text-3xl md:text-5xl text-primary
            "
            >
              Free courses, notes and summaries for all university students
            </h2>
          </div>
          <div>
            <p className="md:text-xl">
              get documents or share your work and earn money
            </p>
          </div>
          <div className="pt-5">
            <a
              href=""
              className="bg-primary py-2 px-5 text-white font-semibold mr-3 rounded-md"
            >
              Sign up
            </a>
            <a href="" className="py-2 px-5 text-primary font-semibold">
              Learn more <span>→</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
