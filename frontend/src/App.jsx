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
}

export default App