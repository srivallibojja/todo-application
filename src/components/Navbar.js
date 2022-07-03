import {Routes,Route,NavLink} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import About from './About'
import {FcTodoList} from 'react-icons/fc'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { useNavigate ,Navigate} from "react-router-dom";
import { clearLoginStatus } from "./slices/userSlice";


function Navbar()
{
      //get state from store
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  //get dispathc function
  let dispath = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  };  
   return (
       <div>
           <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <FcTodoList/>
    <a className="navbar-brand" href="#">MyTodo's</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {isSuccess !==true ? (
        <>
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
        </>):(<>
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <NavLink className="dropdown-item" to="#">Change Password</NavLink>
    <NavLink className="dropdown-item" to="#" onClick={userLogout}>Log out</NavLink>
    
  </div>
</div></>)}
        
        
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
      </div>      
  

   )
}
export default Navbar