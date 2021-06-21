import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom"
import {logout} from "../actions/userActions"


function Header(props) {

  const dispatch = useDispatch()

  const logoutHandler=()=>{
    dispatch(logout())
  }

 
const userLogin = useSelector(state=>state.userLogin);
const {userInfo} = userLogin;
  return (
    <>
<section  className="info ">
  <div>Phone: 08141680547</div>
  <div>Email: dnwosu008@gmail.com</div>
  <div>Address: Wisdom Lodge Awka</div>
</section>
    
<header className="row">
<div><Link className="brand" to="/gallery">Chides Pencils</Link></div>
<div className="right">
 {userInfo?
 
 (
  <div className="dropdown">
    <div  className="header-item userInfo"><i className="fa fa-caret-down"></i> {userInfo.admin}  </div>
    <ul className="dropdown-content">
      <Link className="logout" to="/drawings" >Upload</Link>
      <Link className="logout" to="/account" >Account</Link>
      <Link className="logout" to="/gallery" onClick={logoutHandler}>Logout</Link>
    </ul>
  </div>
    )
 
 
 
 :  <Link className="header-item" to="/login">Login</Link>
}
     </div>
    </header>
    </>)
    
}

export default Header;



