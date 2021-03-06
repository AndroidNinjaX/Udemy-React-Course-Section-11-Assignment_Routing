import React, { Component } from 'react';
//Import the NavLink componet from React-Router-Dom
import { NavLink } from 'react-router-dom';
//Import the Course component
import Course from '../Course/Course';
//Import Route
import { Route } from 'react-router-dom';
import './Courses.css';

//This component is responsible for displaying all of our individual courses.
class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    componentDidMount () {
        console.log("[Course's] component did mount.");
        console.log("****************************************");
    }

    componentDidUpdate () {
        console.log("[Course's] component updated.");
        console.log("****************************************");
    }

    componentWillUnmount () {
        console.log("[Course's] component unmounted.");
        console.log("****************************************");
    }

    render () {
        /*------------------
        Make a variable of courses to output as JSX.
        -Itterate through the "state.courses" and return each one as a linked component.
            -Set each link to the "title".
            -Set the "key" to the "id" of the course.
        -Pass in the current object as "props" to the "Course" component.
        ------------------*/
        const courses = this.state.courses.map( course => {
                            return (
                                <NavLink to={"/courses/" + course.title} key={course.id}>
                                    <Course courseInfo={course} />
                                </NavLink>
                            );
                        } );

        //Return our JSX and also single "course" if clicked on any of them.
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                <Route path="/courses/:title" exact component={Course} />
            </div>
        );
    }
}

export default Courses;