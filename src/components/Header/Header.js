
import React from "react";
import "./Header.css";
import {Navbar , Nav, Container ,Button ,Form  } from "react-bootstrap";
import {Link , NavLink, Route , Routes, useNavigate} from 'react-router-dom';
import {FcTodoList} from 'react-icons/fc'
import { useSelector } from "react-redux";
import { clearLoginStatus } from "../slices/userSlice";
import { useDispatch } from "react-redux";

function Header(){

    let navigate=useNavigate();

    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
      (state) => state.user
    );
    //get dispathc function
    let dispath = useDispatch();
  
  
    //logout user
    const userLogout = () => {
      localStorage.clear();
      dispath(clearLoginStatus());
      navigate("/login");
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="text-white">
        <Container fluid>
          <Navbar.Brand href="/"><FcTodoList size={32}/><b>MY TODO'S </b></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={NavLink}  to="/">HOME</Nav.Link>
              <Nav.Link as={NavLink}  to="aboutus">ABOUT US</Nav.Link>
              <Nav.Link as={NavLink}  to="register">REGISTER</Nav.Link>
              <Nav.Link as={NavLink}   to="contact">CONTACT US</Nav.Link>
            </Nav>
            
            {isSuccess !== true ? (
                <>
            <Button className='m-2' variant="outline-primary" onClick={() => navigate('/login')}>Signin/Signup</Button>
              </>):
              (
                <Button className='m-2' variant="outline-primary" onClick={userLogout}>
                      Logout
                      </Button>
              )
}
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
}

export default Header;