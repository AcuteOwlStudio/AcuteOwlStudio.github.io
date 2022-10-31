import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './home.jsx';
import About from './about.jsx';
import Games from './games.jsx';
import Blog from './blog.jsx';
import Contact from './contact.jsx';
import Press from './press.jsx';

function Main(props) {
  return (
    <Routes>
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Games" element={<Games/>} />
      <Route exact path="/Blog" element={<Blog/>} />
      <Route exact path="/Contact" element={<Contact/>} />
      <Route exact path="/Press" element={<Press/>} />
      <Route exact path="/" element={<Home/>}/>
      <Route path="/*" component={<Navigate replace to ="/" />} />
    </Routes>
  );
}

export default Main;
