import { Routes, Route } from "react-router-dom"
import { SignIn } from "../components/LoginSignup/SignIn"
import { SignUp } from "../components/LoginSignup/SignUP"
import { MainHomePage } from "../components/MainHome/MainHomePage";

export const AllRoutes=()=>{

    return (
        <>
            <Routes>
                <Route path='/Login' element={<SignIn />} />
                <Route path="/create-account" element={<SignUp />} />
                <Route path="/home" element={<MainHomePage/>}/>
                 
            </Routes>
        </>
    );
}