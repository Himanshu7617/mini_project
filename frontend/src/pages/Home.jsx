import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useFirebase } from "../context/FirebaseContext"
import AccordianUI from "../components/AccordianUI";
import img1 from '../assets/1.png';
import img2 from '../assets/2.jpg'


const Home = () => {

    const firebase = useContext(useFirebase);
    const navigate = useNavigate();

    useEffect(() => {
        if (firebase.isLoggedIn) {
            navigate('/fluentify/dashboard');
        }
    }, [firebase, navigate])

    return (
        <div className="w-full h-fit flex justify-center items-center flex-col gap-4 ">
            <section className=" w-full h-[100vh] flex justify-center items-center flex-col gap-4">

                <h1 className="sm:text-6xl md:text-8xl font-bold text-4xl  ">
                    Fluentify
                </h1>
                <h6 className="md:text-3xl text-[1rem] ">Lorem ipsum dolor sit amet consectetur, </h6>
                <button className="md:text-1xl text-sm bg-black text-white p-4 rounded-2xl hover:bg-gray-700 ">Add to Chrome</button>
                <div className=" absolute top-4 right-6 md:top-6 md:right-16 border-2 p-2 hover:bg-black cursor-pointer  hover:text-white border-black rounded-md">
                    <Link to='/fluentify/signup' className=" text-cyan-600"> Sign Up</Link> /
                    <Link to='/fluentify/login' className=" text-cyan-600"> Login</Link>
                </div>
            </section>
            <section className="w-full sm:h-fit  lg:h-[150vh] flex justify-center items-center ">
                <div id="img-master-container" className="w-4/5 h-4/5 md:flex   jusitfy-center items-center flex-col lg:flex-row md:flex-row gap-4  ">

                    <div className=" flex-col gap-4">

                        <div id="img-container1 " className="h-96 sm:w-5/5 md:w-[40vw] rounded-lg mb-4 overflow-hidden ">
                            <img className="object-cover rounded-lg border-l-gray-900 shadow-lg" src={img1} alt="" />
                        </div>
                        <div id="img-container3 " className="h-96 sm:w-5/5 md:w-[40vw] rounded-lg mt-4 overflow-hidden ">
                            <img className="object-cover rounded-lg " src={img2} alt="" />
                        </div>
                    </div>
                    <div id="img-container2" className="h-[49rem] sm:w-5/5 sm:mt-4 md:w-[35vw] rounded-lg bg-pink-300">

                    </div>
                </div>

            </section>

            <section className=" w-full h-[60vh] flex justify-center items-center flex-col gap-4">
                
                <div className="h-fit w-4/5">

                <AccordianUI/>
                </div>
            </section>

            
        </div>
    )
}

export default Home