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
   
{/* <section className="info ">
  <div>Phone: 08141680547</div>
  <div>Email: dnwosu008@gmail.com</div>
  <div>Address: Wisdom Lodge Awka</div>
</section> */}
    
<header 
 
>

{ userInfo ?  (<nav className="navbar navbar-inverse">
<div className="container-fluid">
    <div className="navbar-header">
<button className="navbar-toggle collapsed" data-toggle="collapse" 
data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
<span className="sr-only">Toggle Navigation</span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
</button>
        <Link to="/gallery" className="navbar-brand"> <div style={{color:"white", fontSize: "2.5rem"}}>Gallery</div> </Link>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
        <li><Link className="a" to="/account"> {userInfo.admin}</Link></li> 
        <li><Link className="a" to="/drawings" >Upload</Link></li>
        <li><Link className="a" to="/gallery" onClick={logoutHandler}>Logout</Link> </li>    
        
         
        </ul>
    </div>
</div>
</nav>) :

(<nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
<button className="navbar-toggle collapsed" data-toggle="collapse" 
data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
<span className="sr-only">Toggle Navigation</span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
</button>
                        <Link to="/gallery" className="navbar-brand"> <div style={{color:"white", fontSize: "2.5rem"}}>Gallery</div></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right link">
         
                      <li><Link className="active"  to="/about">About</Link></li>  
                      {/* <li><Link   to="/contact">Contact</Link></li>       */}

                      <li><Link   to="/login">Login</Link></li> 
                   
                         
                        </ul>
                    </div>
                </div>
            </nav>)}
{/* // <div><LinkclassName="brand" to="/gallery">Chides Pencils</Link></div>
// <divclassName="right">
//  {userInfo? */}
 
{/* //  (
//   <divclassName="dropdown">
//     <div className="header-item userInfo"><iclassName="fa fa-caret-down"></i> {userInfo.admin}  </div>
//     <ulclassName="dropdown-content">
//       <LinkclassName="logout" to="/drawings" >Upload</Link>
//       <LinkclassName="logout" to="/account" >Account</Link>
//       <LinkclassName="logout" to="/gallery" onClick={logoutHandler}>Logout</Link>
//     </ul>
//   </div>
//     )
 
 
 
//  :  <LinkclassName="header-item" to="/login">Login</Link> */}

       {/* </div>  */}
    </header>
    </>)
    
}

export default Header;



