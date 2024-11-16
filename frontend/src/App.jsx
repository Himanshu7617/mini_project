<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


const ProtectedRoute = ( props ) => {
  return (props.children);
}


const App = () => {
  return (
    <Routes>
      <Route path='/fluentify/*' element={<Home/>}/>
      <Route path='/fluentify/signup' element={<SignUp/>}/>
      <Route path='/fluentify/login' element={<Login/>}/>
      <Route path='/fluentify/dashboard' element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
    </Routes>
    
  )
=======
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <div className="text-xl font-semibold ">Hello World</div>
      <button className="bg-blue-500 text-white ">
        <Link to="/dashboard">Dashboard</Link>
      </button>
    </div>
  );
>>>>>>> 33345c478acbec8525f1531a782c7836d95f3ec5
}

export default App;
