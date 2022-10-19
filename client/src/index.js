import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from './components/Navbar';

import About from './components/About';
import Practice from './components/Practice';
import Attorneys from './components/Attorneys';

import Footer from './components/Footer';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';

import CreatePost from "./CreatePost";
import Posts from "./Posts";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/create/posts" element={<Posts />}></Route>
       
       
       
       
       <Route  path='/about' element={<About />} />
       <Route  path='/practice' element={<Practice />} />
       <Route  path='/attorneys' element={<Attorneys />} />
       
       <Route  path='/register' element={<Register />} />
       <Route  path='/login' element={<Login />} />
       <Route  path='/detail' element={<Details />} />
       
       
       </Routes>
       <Footer/>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
