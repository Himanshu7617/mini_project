import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useFirebase } from "../context/FirebaseContext"

const Home = () => {

    const firebase = useContext(useFirebase);
    const navigate = useNavigate();

    useEffect(() => { 
        if( firebase.isLoggedIn ){
            navigate('/fluentify/dashboard');
        }
    },[firebase, navigate])

    return (
        <div className="w-full h-[100vh] flex justify-center items-center  ">
            <h1 className=" text-8xl ">
                Fluentify
            </h1>
            <div  className = " absolute top-6 right-16 border-2 p-2 border-black rounded-md"> 
                <Link to='/fluentify/signup' className=" text-cyan-600"> Sign Up</Link> /
                <Link to='/fluentify/login'  className=" text-cyan-600"> Login</Link>
            </div>
        </div>
    )
}

export default Home