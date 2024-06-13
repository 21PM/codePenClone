import { useEffect, useState } from 'react'
import Routers from './Routing/Routers'
import './App.css'
import {useNavigate} from "react-router-dom"
import { auth, db } from './Config/firebase.config'
import { QuerySnapshot, collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { Set_USER } from './context/actions/userActions'
import { SET_PROJECTS } from './context/actions/projectActions'

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userCred)=>{
      if(userCred){
        console.log(userCred?.providerData[0].displayName);
        setDoc(doc(db,"users",userCred?.uid),userCred?.providerData[0]).then(()=>{
          dispatch(Set_USER(userCred?.providerData[0]))
        navigate("/yourwork")

        })
      }else{
        navigate("/yourwork")
      }
    })  


    setInterval(()=>{
      setIsLoading(false)
   },2000)

    return () =>unsubscribe()
  
  },[])

  useEffect(()=>{
    const projectQuery = query(
      collection(db,"ProjectsData"),
      orderBy("id","desc")
    )

    const unsubscribe = onSnapshot(projectQuery,(querySnaps =>{
        const projectList = querySnaps.docs.map((doc)=>doc.data())
        dispatch(SET_PROJECTS(projectList))
    })) 
;

    return unsubscribe; 

  },[])

  return (
    <>
          {
            isLoading ? <><div className="bg-slate-600 w-screen h-screen flex items-center justify-center overflow-hidden">
              <span class="loader"></span>
              </div></> : <> <Routers/></>
          } 
    </>
  )
}

export default App
