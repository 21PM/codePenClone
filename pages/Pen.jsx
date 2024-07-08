import React, { useEffect, useState } from "react";
import SplitPane, { Pane } from "react-split-pane";
import { MdFullscreen, MdOutlineModeEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaCloud } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { Link, useNavigate } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Config/firebase.config";
import {v4 as ProjectId} from "uuid"
import { useLocation } from 'react-router-dom';

// import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Pen() {

  const location = useLocation();
  const dataReceived = location.state?.user;
  const penHtml = dataReceived?.html;
  const penCss = dataReceived?.css;
  const penjs = dataReceived?.js;
  const penOutput = dataReceived?.output


  const [html, SetHtml] = useState(penHtml? penHtml:"");
  const [css, SetCss] = useState(penCss? penCss:"");
  const [js, SetJs] = useState(penjs? penjs:"");
  const [output, SetOutput] = useState(penOutput? penOutput:"");
  const [title, SetTitle] = useState(false);
  const [codeTitle, SetCodetitle] = useState("Untitled");
  const user = useSelector((state) => state.user?.user);
  const[dataSavedalert,SetDataSaveAlert] = useState(false)
  const[dataSavedMsg,SetDataSaveMsg] = useState("")

  

  const navigate = useNavigate();

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  const updateOutput = async () => {
    const combineOutput = `
    <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
            ${html}
        <script>${js}</script>
        </body> 
    </html>
      `;

    SetOutput(combineOutput);
  };

  // setDoc(doc(db,"users",userCred?.uid),userCred?.providerData[0])

  const SaveProjectsInDb = async () =>{

    if(user){
      const id = `${Date.now()}`;
      const projectsData = {
        id:id,
        title:codeTitle,
        html:html,
        css:css,
        js:js,
        output:output,
        user:user

      }
      console.log("before");
      await setDoc(doc(db,"ProjectsData",id),projectsData).then((res)=>{
        console.log("after");
    toast.success("Data Saved Successfully")

         setTimeout(()=>{
          navigate("/yourwork")
         },1000)


      }).catch((err)=>console.log("err"));
    }
    else{
      alert('kindly Login to Save data')
    }


  }




  return (
    <>
      <div>
      <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
/>
        <nav className="max-w-screen h-12 bg-black border-b-2 text-slate-200 flex items-center justify-between px-2 py-2">
          
          <div className="h-full flex items-center gap-3">
            <Link to={"/yourwork"} className="h-full flex items-center gap-3">
              <img
                src="https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png"
                className="h-full cursor-pointer"
              ></img>
            </Link>

            {/******* Logo section  ************* */}
            <div className="flex flex-col justify-center h-full">
              <div className="flex gap-2 items-center justify-center">
                {!title ? (
                  <>
                    <span>{codeTitle}</span>
                    <MdOutlineModeEdit
                      className="cursor-pointer"
                      onClick={() => SetTitle(!title)}
                    />
                  </>
                ) : (
                  <>
                    <input
                      value={codeTitle}
                      className="bg-slate-600"
                      autoFocus
                      onChange={(e) => SetCodetitle(e.target.value)}
                      type="text"
                    ></input>
                    <span onClick={() => SetTitle(!title)}>✅</span>
                  </>
                )}
              </div>

              <div className="flex items-center justify-start">
                <span className="text-xs">Paras</span>
              </div>
            </div>
          </div>

          <div className="h-full flex items-center justify-center">
            {/*****  Profile and Save section ******/}

            <div className="h-full flex items-center gap-20 px-5">
              <div onClick={SaveProjectsInDb} className="flex items-center gap-2 px-4 py-1 bg-slate-600 rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300">
                <FaCloud />
                <span>Save</span>
              </div>

              {user ? (
                <>
                  <CgProfile
                    className="h-full w-fit cursor-pointer"
                    onClick={() =>navigate("/profile")}
                  />
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <div className="flex gap-5 pr-5">
                      <div className="lg:px-7 lg:py-1 sm:px-7 sm:py-15 py-1 bg-slate-600 rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300">
                        SIGN UP
                      </div>

                      <div className="lg:px-7 lg:py-1 sm:px-7 sm:py-15 py-1  bg-slate-600 rounded cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300">
                        LOGIN
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>

      <div className="w-full h-screen border-black overflow-hidden">
        
        <SplitPane
          split="horizontal"
          minSize={150}
          defaultSize={350}
          className="mt-12 max-full"
        >
          <SplitPane
            split="vertical"
            defaultSize={500}
            minSize={100}
            className="gap-1 w-full bg-black"
          >
            {/* html */}

            <div className="w-full h-screen  bg-zinc-800">
              <div className="w-full h-6 bg-black flex items-center justify-start">
                <div className="flex bg-gray-600 items-center px-2">
                  <FaHtml5 className="lg:text-base xs:text-xs	 text-red-600" />
                  <p className="text-slate-300 font-semibold">HTML</p>
                </div>
              </div>

              <div className="w-full px-2">
                <CodeMirror
                  value={html}
                  height="600px"
                  extensions={[javascript({ jsx: true })]}
                  theme={"dark"}
                  onChange={(value, viewUpdate) => {
                    SetHtml(value);
                  }}
                />
              </div>
            </div>

            <SplitPane
              split="vertical"
              defaultSize={500}
              minSize={100}
              className="gap-1"
            >
              {/* css */}
              <div className="w-full bg-zinc-800	">
                <div className="w-full h-6 bg-black flex items-center justify-start">
                  <div className="flex bg-gray-600 items-center px-2">
                    <FaCss3Alt className="lg:text-base xs:text-xs	 text-blue-600" />
                    <p className="text-slate-300 font-semibold">CSS</p>
                  </div>
                </div>
                <div className="w-full px-2 ">
                  <CodeMirror
                    value={css}
                    height="600px"
                    extensions={[javascript({ jsx: true })]}
                    theme={"dark"}
                    onChange={(value, viewUpdate) => {
                      SetCss(value);
                    }}
                  />
                </div>
                
              </div>
              {/* js */}
              <div className="w-full bg-zinc-800	">
                <div className="w-full h-6 bg-black flex items-center justify-start">
                  <div className="flex bg-gray-600 items-center px-2">
                    <DiJavascript className="lg:text-base xs:text-xs	 text-yellow-600" />
                    <p className="text-slate-300 font-semibold">Javascript</p>
                  </div>
                </div>
                <div className="w-full h-screen px-2 overflow-auto">
                  <CodeMirror
                    value={js}
                    height="600px"
                    extensions={[javascript({ jsx: true })]}
                    theme={"dark"}
                    onChange={(value, viewUpdate) => {
                      SetJs(value);
                    }}
                  />
                </div>
                
              </div>
            </SplitPane>
          </SplitPane>

          {/* <Pane className="bg-gray-200 p-2"> */}
          {/* You can add results here */}
          <div
            className="bg-white"
            style={{ overflow: "hidden", height: "100%" }}
          >
            <iframe
              title="Results"
              srcDoc={output}
              style={{ border: "none", width: "100%", height: "100%",}}
            />
          </div>
          {/* </Pane> */}
        </SplitPane>
      </div>
    </>
  );
}

export default Pen;
