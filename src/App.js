import Header from "./components/Header/Header"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/" element={<Homepage/>}/>
                <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App