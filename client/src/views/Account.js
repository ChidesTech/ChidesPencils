import React, { useState, useEffect } from 'react';
import {  update } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Popup from '../components/Popup';

const  Account = (props) =>{
  const [admin, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, admin, password }))
    props.history.push("/gallery");
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const {  success, error } = userUpdate;

  
  useEffect(() => {
    if (userInfo) {
      setAdmin(userInfo.admin);
      setPassword(userInfo.password);
    }
    return () => {

    };
  }, [userInfo])

  return  <div className="grid-container">
  <Header/>
<main>
  <div>

<form className="form"
 onSubmit={submitHandler}
 >
  
<div>
      <h1>Change Password</h1>
    </div>
    <div>
  {error && <Popup variant="danger">{error}</Popup>}
  {success && <Popup variant="info">Product Saved Successfully</Popup>}
    </div>
   
    {/* <div>
        <input value={admin} type="text" name="admin" placeholder="New Name" 
         onChange={(event) => setAdmin(event.target.value)} 
        ></input>
    </div> */}
    <div>
        <input type="password" name="password" placeholder="New Password" 
         onChange={(event) => setPassword(event.target.value)} 
        ></input>
    </div>
    <div> 
    
    <button className=" btns"  type="submit">Update</button>
    </div>
    
</form>

</div>
</main>

</div>

}

export default Account;