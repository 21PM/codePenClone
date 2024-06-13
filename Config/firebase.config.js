import {getApp,getApps,initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_API_KEY,
//     authDomain:process.env.REACT_APP_AUTHDOMAIN, 
//     projectId:process.env.REACT_APP_PROJECTID, 
//     storageBucket:process.env.REACT_APP_STORAGEBUCKET, 
//     messagingSenderId:process.env.REACT_APP_MESSAGESENDERID,
//     appId: process.env.REACT_APP_APPID,
//   };


const firebaseConfig = {
  apiKey: "AIzaSyDr2MyvPkRIICXNBSRdmN9WLcyN_z_IyHM",
  authDomain: "new-code-penclone.firebaseapp.com",
  projectId: "new-code-penclone",
  storageBucket: "new-code-penclone.appspot.com",
  messagingSenderId: "173865302580",
  appId: "1:173865302580:web:7658536bd9f556bd64a861"
};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const auth = getAuth(app)
  
  const db = getFirestore(app)

  export {app,auth,db}