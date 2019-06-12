import React, { Component } from 'react';
//Import the NavLink componet from React-Router-Dom
import { NavLink } from 'react-router-dom';
//Import the Course component
import Course from '../Course/Course';

import './Courses.css';

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
    }

    componentDidUpdate () {
        console.log("[Course's] component updated.");
    }

    componentWillUnmount () {
        console.log("[Course's] component unmounted.");
    }

    selectCourseHandler(id) {
        return(
            <Course courseID={id}/>
        );
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <NavLink to={"/courses/" + course.id} key={course.id}>
                                    <Course
                                        courseTitle={course.title}
                                        courseID={course.id}>
                                    </Course>
                                    {/*<article 
                                        className="Course"
                                    clicked={() => this.selectCourseHandler(course.id)}>{course.title}</article>;*/}
                                </NavLink>
                            );
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default Courses;