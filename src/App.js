import React, { Component } from 'react';
//Import Route from 'react-router-dom'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Objectives from './containers/Objectives/Objectives';
import "./App.css";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">

          {
            /*------------------
            Navigation Bar
              -Use "NavLink" so I can specify an "active" link.
            ------------------*/
          }
          <nav className="Navigation">
            <p><NavLink to="/" exact activeClassName="activeClass">Home</NavLink></p>
            <p><NavLink to="/Courses" exact activeClassName="activeClass">Courses</NavLink></p>
            <p><NavLink to="/Users" exact activeClassName="activeClass">Users</NavLink></p>
            <p>
              <NavLink to="/Objectives" exact activeClassName="activeClass">Assignment Objectives</NavLink>
            </p>
          </nav>

          {/*------------------
          Routes to different sections are following:
          -Home Route
            -Main page
          -Courses Route
            -List of all courses.
          -Users Route
            -Location for Users to go.
          -404 Route
            -If a link is unavaiable, render 404.
          ------------------*/}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Route path="/objectives" component={Objectives} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;