<<<<<<< HEAD
import { useContext, useEffect } from "react"
import { useFirebase } from "../context/FirebaseContext"
import { useNavigate } from "react-router-dom";

=======
import React from 'react'
import { Link } from 'react-router-dom';
>>>>>>> 33345c478acbec8525f1531a782c7836d95f3ec5

const Dashboard = () => {

  const firebase = useContext(useFirebase);
  const navigate = useNavigate();

  useEffect(() => {
    if(!firebase.isLoggedIn) {
      navigate('/fluentify/');
    }
  }, [firebase, navigate]);


  return (
<<<<<<< HEAD
    <div>

      <div
        onClick={firebase.logOut}
        className=" absolute top-6 right-16 border-2 p-2 border-black rounded-md cursor-pointer hover:bg-black hover:text-cyan-600">
        <p>Log out</p>
      </div>
    </div>
  )
=======
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-xl font-semibold mb-4">Dashboard</div>
      <button><Link to="/">Back</Link></button>
    </div>
  );
>>>>>>> 33345c478acbec8525f1531a782c7836d95f3ec5
}

export default Dashboard