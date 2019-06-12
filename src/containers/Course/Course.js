import React, { Component } from 'react';
import './Course.css';

class Course extends Component {

    componentDidMount () {
        console.log("[Course] component did mount.");
        console.log("Here are your props");
        console.log(this.props);
    };
    
    render () {
        return (
            <div className="Course">
                <h1>{this.props.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.courseID}</p>
            </div>
        );
    }
}

export default Course;