import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./views/Home";
import Landing from "./views/Landing";
import Login from "./views/Login";
import Drawing from "./views/Drawing";
import { useSelector } from "react-redux";
import NotFound from "./views/NotFound";
import Account from "./views/Account";

function App(props) {
  const userLogin = useSelector(state=>state.userLogin);
  const {userInfo} = userLogin;
  return (<>


    <BrowserRouter>
    
    <Switch>
      {userInfo && <Route path="/drawings" exact={true} component={Drawing} />}
      {userInfo && <Route path="/account" exact={true} component={Account} />}
      <Route path="/login" exact={true} component={Login} />
      <Route path="/gallery" exact={true} component={Home} />
      <Route path="/" exact={true} component={Landing} />
      <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </>)
}

export default App;
