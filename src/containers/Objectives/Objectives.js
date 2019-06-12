import React from 'react';

//This component is to display the assignment objectives.
const Objectives = () => (
    <div>
        <h1>Assignment Objectives</h1>
        <p>These are the objectives for Assignment 3 Udemy React Course.</p>
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
);

export default Objectives;