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
   
{/* <section  className="info ">
  <div>Phone: 08141680547</div>
  <div>Email: dnwosu008@gmail.com</div>
  <div>Address: Wisdom Lodge Awka</div>
</section> */}
    
<header 
// className="row"
>

{ userInfo ?  (<nav class="navbar navbar-inverse">
<div class="container-fluid">
    <div class="navbar-header">
<button class="navbar-toggle collapsed" data-toggle="collapse" 
data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
<span class="sr-only">Toggle Navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
        <Link to="/gallery" class="navbar-brand"> <div style={{color:"white", fontSize: "2.5rem"}}>Gallery</div> </Link>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
        <li><Link className="a" to="/account"> {userInfo.admin}</Link></li> 
        <li><Link  className="a" to="/drawings" >Upload</Link></li>
        <li><Link  className="a" to="/gallery" onClick={logoutHandler}>Logout</Link> </li>    
        
         
        </ul>
    </div>
</div>
</nav>) :

(<nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
<button class="navbar-toggle collapsed" data-toggle="collapse" 
data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
<span class="sr-only">Toggle Navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
                        <Link to="/gallery" class="navbar-brand"> <div style={{color:"white", fontSize: "2.5rem"}}>Gallery</div></Link>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right link">
         
                      <li><Link exact  to="/about">About</Link></li>      
                      <li><Link   to="/login">Login</Link></li> 
                   
                         
                        </ul>
                    </div>
                </div>
            </nav>)}
{/* // <div><Link className="brand" to="/gallery">Chides Pencils</Link></div>
// <div className="right">
//  {userInfo? */}
 
{/* //  (
//   <div className="dropdown">
//     <div  className="header-item userInfo"><i className="fa fa-caret-down"></i> {userInfo.admin}  </div>
//     <ul className="dropdown-content">
//       <Link className="logout" to="/drawings" >Upload</Link>
//       <Link className="logout" to="/account" >Account</Link>
//       <Link className="logout" to="/gallery" onClick={logoutHandler}>Logout</Link>
//     </ul>
//   </div>
//     )
 
 
 
//  :  <Link className="header-item" to="/login">Login</Link> */}

       {/* </div>  */}
    </header>
    </>)
    
}

export default Header;



