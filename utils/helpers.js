import {GithubAuthProvider, GoogleAuthProvider, signInWithRedirect} from "firebase/auth"
import {auth} from "../Config/firebase.config"
import { useNavigate } from "react-router-dom"

const googleprovider = new GoogleAuthProvider ()
const githubprovider = new GithubAuthProvider ()

// const navigate = useNavigate()

export const Signwithgoogle = async () =>{
    await signInWithRedirect(auth,googleprovider).then(userCred =>{
         window.location.reload()
        //  navigate("/")
    })
}

export const SignwithGitHub  = async () =>{
    await signInWithRedirect(auth,githubprovider).then(userCred =>{
         window.location.reload()
        //  navigate("/")
    })
}

export const Signoutfunc = async () =>{
    await auth.signOut().then(()=>{
        window.location.reload();
    })
}