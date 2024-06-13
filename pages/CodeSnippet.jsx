import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PickedPens = () => {

  const projects = useSelector(store=>store.projects?.projects)
  // console.log(projects);
  const SearchValues = useSelector(state=> state.Searchvalues)
  
  const[notFound,SetNotFound] = useState()
  
  const [filteredArray,SetfilteredArray] = useState([])


    useEffect(()=>{
      let lowersearchvalues = SearchValues?.Searchinput?.toLowerCase()

      
      let ans = projects.filter((ele)=>{  
        //  let lowersearchvalues = SearchValues?.Searchinput?.toLowerCase()
          let title = ele.title.toLowerCase();
         return title.includes(lowersearchvalues);

      })    

      // console.log(ans);
      SetfilteredArray(ans)
      if(ans.length === 0 && lowersearchvalues && lowersearchvalues.length > 0){
        SetNotFound(true)
      }

    },[SearchValues])


    let dataArray = filteredArray && filteredArray.length > 0 ? filteredArray : projects;

    if(notFound){
      setTimeout(() => {
        SetNotFound(false)
        
      }, 1000);
    }


    console.log(notFound);

  const pens = [
    {
      title: "Me in SVG! ?",
      id: 1,
      author: "Lara Schenck",
      authorImg: "url-to-author-img",
      description: "",
      likes: 2,
      comments: 0,
      views: 0,
      img: "url-to-pen-img",
    },
    {
      title: "SVG face ani...",
      id: 2,
      author: "Ana Tudor",
      authorImg: "url-to-author-img",
      description: "",
      likes: 10,
      comments: 0,
      views: 0,
      img: "url-to-pen-img",
    },
    {
      title: "CSS Animate...",
      id: 3,
      author: "Animated Creativity",
      authorImg: "url-to-author-img",
      description: "",
      likes: 15,
      comments: 1,
      views: 0,
      img: "url-to-pen-img",
    },
    {
      title: "CSS Animate...",
      id: 4,
      author: "Animated Creativity",
      authorImg: "url-to-author-img",
      description: "",
      likes: 15,
      comments: 1,
      views: 0,
      img: "url-to-pen-img",
    },
    {
      title: "CSS Animate...",
      id: 5,
      author: "Animated Creativity",
      authorImg: "url-to-author-img",
      description: "",
      likes: 15,
      comments: 1,
      views: 0,
      img: "url-to-pen-img",
    },
  ];

  function openSelectedProjects(ele){
    console.log(ele);
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-5 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-5">Picked Pens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {!notFound ? dataArray.map((ele) => {

              // console.log(ele.user);
            
            return (
              <>
                <div onClick={openSelectedProjects}
                  className="w-full bg-gray-600 cursor-pointer flex min-h-80 flex-col p-2"
                  key={ele.id}
                >
                  <div className="border-2 h-80p  w-full">
                    <div
                      className="bg-white"
                      style={{ overflow: "hidden", height: "100%" }}
                    >
                      <iframe
                        title="Results"
                        srcDoc={ele.output}
                        style={{
                          border: "none",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="h-20p  flex flex-col items-start justify-center">
                    <h1>{ele.title}</h1>
                    <p>{ele.user.displayName}</p>
                  </div>
                </div>
              </>
            );
          }):<h1>Data Not Found</h1>
          
          }
        </div>
      </div>
    </div>
  );
};

export default PickedPens;
