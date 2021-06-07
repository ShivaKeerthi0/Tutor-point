import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignUp from './SignUp'
import Login from './Login'
import './Navbar.css'
import Home from './Home'
import Courses from './Courses'
import UserPage from './UserPage';
import Open from './Open'
import JsIntro from './JsIntro'


function Linker() {
    return (
        <div  >
            
            <Router >
          <Switch>
              <Route exact path="/Open">
                  <Open />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/SignUp">
                  <SignUp/>
              </Route>
              <Route exact path="/Login">
                  <Login/>
              </Route>
              <Route exact path="/Courses">
                <Courses/>
              </Route>
              <Route exact path="/UserPage">
                  <UserPage/>
              </Route>
              <Route exact path="/JsIntro">
                  <JsIntro/>
              </Route>
              
              <Route path="*">
                  <h1>Page Not Found...404!</h1>
              </Route>

          </Switch>
        </Router>
            
            
            
            
           
            
        </div>
    )
}

export default Linker;
