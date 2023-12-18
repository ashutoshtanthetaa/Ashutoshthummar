import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './Components/Pages/Login.jsx';
import SignUp from './Components/Pages/SignUp.jsx';
import Nft from './Components/Pages/Nft.jsx';
import Mining from './Components/Pages/Mining.jsx'
import Blogs from "./Components/Pages/Blogs.jsx";
import Games from "./Components/Pages/Games.jsx"
import Donation from './Components/Pages/Donation.jsx';
import Music from './Components/Pages/Music.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/App" element={<App />}></Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/Nft" element={<Nft />}></Route>
        <Route path="/Mining" element={<Mining />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="/Games" element={<Games />}></Route>
        <Route path="/Donation" element={<Donation />}></Route>
        <Route path="/Music" element={<Music />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
