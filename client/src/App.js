import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import WIMF from "./pages/WIMF";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
        <Route exact path = "/" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignIn 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
              handleKeyPress = {this.handleKeyPress}
            />
          } 
        }}/>
        <Route exact path = "/signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignUp 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          }  
        }}/>
        <Route exact path = "/home" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        <Route exact path = "/recipes" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Recipes handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        <Route exact path = "/whats_in_my_fridge" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <WIMF handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        <Route exact path = "/about" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <About handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        </div>
      </Router>
    );
  }
}

export default App;