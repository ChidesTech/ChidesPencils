import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../../src/index.css"
import { login } from '../actions/userActions';
import Header from '../components/Header';
import Popup from '../components/Popup';
 const Login = (props) => {
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector(state => state.userLogin);

  const { userInfo, error} = userLogin
  const dispatch = useDispatch();


useEffect(()=>{
if(userInfo){
  props.history.push("/gallery")
}

    return ()=>{

    }
},[userInfo, props.history])


 
 

const submitHandler=(event)=>{
    event.preventDefault();
    dispatch(login(admin, password))
}

  return (<>
  
   <div className="grid-container">
    <Header/>

    <div>

    <form className="form"
     onSubmit={submitHandler}
     >
      
    <div>
         <h1> Admin Login </h1>
        </div>
        <div>
      {error && <Popup  variant="maxalert">{error}</Popup>}
        </div>
        <div>
            <input type="text" name="admin" placeholder="Admin" 
             onChange={(event) => setAdmin(event.target.value)} 
            ></input>
        </div>
        <div>
            <input type="password" name="password" placeholder="Password" 
             onChange={(event) => setPassword(event.target.value)} 
            ></input>
        </div>
        <div> 
        <label/>
        <button className=" btns"  type="submit">Login</button>
        </div>
        
    </form>

</div>
<footer className=" center">By ChidesTechnologies@2021</footer>

</div>
</>
  );
}


export default Login;