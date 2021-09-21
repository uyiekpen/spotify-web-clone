import React from 'react'
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/home"
import LoginPage from './Components/Router/LoginPage';


const App = () => {
 
  
  return (
    <Router>
      <Switch>
      <Route path = "/" exact component = {Home}/>
      <Route path = "/login"  component = {LoginPage}/>
    
      </Switch>
    </Router>
   
  )
}

export default App

