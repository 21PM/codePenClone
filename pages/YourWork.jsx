import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import Profile from "./Profile";
import { Link } from "react-router-dom";

function YourWork() {
  const [showMenu, SetShowMenu] = useState(false);
  const [isLogin, SetIslogin] = useState(false);

  const handleShowMenu = () => {
    console.log("clickd");
    SetShowMenu(!showMenu);
  };

  console.log(showMenu);

  return (
    <>
      <div className="flex max-h-full overflow-hidden bg-gray-800">
        {/* {left div} */}
        <aside className="w-2/12 items-center flex-col justify-start cursor-pointer">
          <div className="lg:p-6 pt-8">
            <img src="https://blog.codepen.io/wp-content/uploads/2022/01/codepen-wordmark-display-inside-white@10x.png"></img>
          </div>

          <div className=" p-4 border-2 rounded-lg	mt-10 m-auto w-11/12 flex items-center justify-center cursor-pointer text-gray-300   hover:bg-slate-100 hover:text-black transition-all duration-300">
            Start Coding
          </div>

          <div className="w-full h-4  mt-10 flex items-center justify-center lg:p-6 md:p-10 text-gray-300 cursor-pointer hover:bg-slate-100 hover:text-black transition-all duration-300">
            Your Work
          </div>
        </aside>

        {/* {right div} */}
        <aside className="w-11/12 max-h-screen">
          <nav className="bg-gray-950	 text-white p-4 flex flex-wrap items-center justify-between ">
            <div className="lg:px-7 lg:py-2 sm:px-4 sm:py-15 py-2  bg-slate-600 rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300">
              Your Work
            </div>

            <div className="lg:flex hidden items-center bg-slate-600 px-2">
              <IoSearch />
              <input
                type="text"
                placeholder={`Search CodePen...`}
                className="bg-slate-600 h-10 focus:outline-none focus:border-sky-500 focus:border-transparent"
              ></input>
            </div>

            {isLogin ? (
              <div className="h-8 w-16 flex items-center gap-0">
                <CgProfile className="w-full h-full cursor-pointer" />
              </div>
            ) : (
              <Link to={"/login"}>
                <div className="flex gap-5 pr-5">
                  <div className="lg:px-7 lg:py-2 sm:px-7 sm:py-15 py-2 bg-slate-600 rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300">
                    SIGN UP
                  </div>

                  <div className="lg:px-7 lg:py-2 sm:px-7 sm:py-15 py-2  bg-slate-600 rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300">
                    LOGIN
                  </div>
                </div>
              </Link>
            )}
          </nav>
          <Profile />
        </aside>
      </div>
    </>
  );
}

export default YourWork;
