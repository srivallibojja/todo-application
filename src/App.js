
import {Routes,Route,NavLink} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Footer from './components/Footer';

import './App.css';
import {FcTodoList} from 'react-icons/fc'


function App() {
  return (
    <div >
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <FcTodoList/>
    <a className="navbar-brand" href="#">MyTodo's</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/about">About</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
      {/* define routes for its children */}
      <Routes>
        {/* route for Home component */}
        <Route path="/" element={<Home/>}/>
        {/* route for Login component */}
        <Route path="/login" element={<Login/>}/>
        {/* route for Register component */}
        <Route path="/register" element={<Register/>}/>
        {/* route for About component */}
        <Route path="/about" element={<About/>}/>
        
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;