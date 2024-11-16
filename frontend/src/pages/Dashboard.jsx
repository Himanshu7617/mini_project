import { useContext } from "react"
import { useFirebase } from "../context/FirebaseContext"


const Dashboard = () => {

  const firebase = useContext(useFirebase);


  return (
    <div>

      <div
        onClick={firebase.logOut}
        className=" absolute top-6 right-16 border-2 p-2 border-black rounded-md cursor-pointer hover:bg-black hover:text-cyan-600">
        <p>Log out</p>
      </div>
    </div>
  )
}

export default Dashboard