import "./App.css";
import Login from "./pages/Login";
import Page from "./pages/Page";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase";


function App() {

  const [user, setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setUser(user);
    });
  })


  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={ user? <Navigate to="/main"/> : <Page />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
