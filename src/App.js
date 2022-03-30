import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/home.jsx";
import About from "./views/about.jsx";
import Games from "./views/games.jsx";
import Blog from "./views/blog.jsx";
import Contact from "./views/contact.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Games" element={<Games/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/" element={<Navigate replace to ="/home" />} />
        </Routes>
      </Router>
  );
}

export default App;
