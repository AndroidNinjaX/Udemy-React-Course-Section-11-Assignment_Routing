import React, { Component } from 'react';
//Import Route from 'react-router-dom'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
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
            <Route path="/" exact render={() => <h1>Home</h1>} />
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>

          <ol style={{textAlign: 'left'}}>
            <li><b>COMPLETE! </b>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li><b>COMPLETE! </b>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li><b>COMPLETE! </b>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li><b>COMPLETE! </b>Pass the course ID to the "Course" page and output it there</li>
            <li><b>COMPLETE! </b>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li><b>COMPLETE! </b>Load the "Course" component as a nested component of "Courses"</li>
            <li><b>COMPLETE! </b>Add a 404 error page and render it for any unknown routes</li>
            <li><b>COMPLETE! </b>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;