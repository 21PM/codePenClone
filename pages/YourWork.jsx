import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import Profile from "./Profile";
import { Link, useNavigate } from "react-router-dom";
import AllWork from "../components/AllWork";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Signwithgoogle } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
// import React from 'react';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SEARCH_INPUT } from "../context/actions/SearchActions";


function YourWork() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const user = useSelector(state=> state.user?.user)


  const [searchedValues , SetsearchedValues] = useState("")

  useEffect(()=>{
    dispatch(SEARCH_INPUT(searchedValues))
  },[searchedValues])

  const[viewProfile,SetViewProfile] = useState(false)
  const [isLogin, SetIslogin] = useState(true);

  const [Hidesidebar,SetHidesidebar] = useState(false)


  

  return (
    <>
      <div className="flex max-h-full overflow-hidden bg-gray-800">
        {/* {left div} */}
          
        
        <aside className={`  ${!Hidesidebar ? `visible` : `hidden`} w-2/12 items-center flex-col justify-start cursor-pointer transition-transform duration-500 ease-in-out`}>
          <div className="lg:p-6 pt-8">
            <img src="https://blog.codepen.io/wp-content/uploads/2022/01/codepen-wordmark-display-inside-white@10x.png"></img>
            
          </div>

          <Link to={"/pen"}>
          <div className=" p-4 border-2 rounded-lg	mt-10 m-auto w-11/12 flex items-center justify-center cursor-pointer text-gray-300   hover:bg-slate-100 hover:text-black transition-all duration-300">
            Start Coding
          </div>
          </Link>

          <div className="w-full h-4  mt-10 flex items-center justify-center lg:p-6 md:p-10 text-gray-300 cursor-pointer hover:bg-slate-100 hover:text-black transition-all duration-300" onClick={()=>navigate("/yourwork")}>
           Templates
          </div>
        </aside>

        {/* {right div} */}
        <aside className="w-full max-h-screen">
          <nav className="bg-gray-950	 text-white p-4 flex flex-wrap items-center justify-between ">

            <div className="flex items-center justify-center gap-10">
            {
                !Hidesidebar ?  <MdOutlineKeyboardDoubleArrowLeft onClick={()=>SetHidesidebar(!Hidesidebar)} className="bg-slate-600 text-2xl rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300 -ml-4"/> : 
                <MdOutlineKeyboardDoubleArrowRight onClick={()=>SetHidesidebar(!Hidesidebar)} className="bg-slate-600 text-2xl rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300 -ml-4"/>
            }
         
            <div className="lg:px-7 lg:py-2 sm:px-4 sm:py-15 py-2  bg-slate-600 rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300" onClick={()=>navigate("/yourwork")}>
              Your Work
            </div>
            </div>

            <div className="lg:flex hidden items-center bg-slate-600 px-2">
              <IoSearch />
              <input
                type="text"
                value={searchedValues}
                onChange={(e)=>SetsearchedValues(e.target.value)}
                placeholder={`Search CodePen...`}
                className="bg-slate-600 h-10 focus:outline-none focus:border-sky-500 focus:border-transparent"
              ></input>
            </div>

            {user ? (
              <div className="h-8 w-16 flex items-center gap-0">
                {
                  user.photoURL?<><div className="w-full h-fullborder border-1 p-2 rounded-full flex items-center justify-center cursor-pointer" onClick={()=>SetViewProfile(!viewProfile)}>
                      <img src={user.photoURL} className="rounded-full"></img>
                    </div></>:<><CgProfile className="w-full h-full cursor-pointer" onClick={()=>SetViewProfile(!viewProfile)}/></>
                }
                
                
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
         {viewProfile && user? 
         
         <Profile /> : <AllWork/>
          
         }
        </aside>
      </div>
    </>
  );  
}

export default YourWork;
