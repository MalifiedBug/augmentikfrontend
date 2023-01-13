import "./App.css";
import Hero1 from "./Hero1";
import { Routes,Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { createContext } from "react";
import { useState } from "react";
import Dash from "./Dashboard";
import { useEffect } from "react";
import axios from "axios";


export const serverUrl = 'http://localhost:4000'
export const MainContext = createContext();


function App() {

  const navigate = useNavigate();

  const [admin,setAdmin] = useState(window.localStorage.getItem('admin'));

  const [login,setLogin] = useState(window.localStorage.getItem('login'));

  const [data,setData] = useState([])

  useEffect(()=>{
    (async ()=>{
      await axios.get(`${serverUrl}/alldata`).then(response=>setData(response.data))
    })()
  },[data])

  return (
    <MainContext.Provider value={{admin, setAdmin, login, setLogin, data, setData}}>
      <div className="App h-screen w-screen relative">
       <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <span onClick={()=>{navigate("/")}} className="text-2xl text-gray-900 font-semibold">Logo</span>
              <div className="flex space-x-4 text-gray-900 font-bold">
               {login && <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button>}
               {login && <button onClick={()=>{setLogin(false);navigate("/signin")}}>Logout</button>}
                {!login && <button onClick={()=>{navigate("/signin")}}>Sign In</button>}
                {!login && <button onClick={()=>{navigate("/signup")}}>Sign Up</button>}
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Hero1 />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          { login && <Route path="/dashboard" element={<Dash />}/>}
        </Routes>
      </div>
    </MainContext.Provider>
  );
}

export default App;
