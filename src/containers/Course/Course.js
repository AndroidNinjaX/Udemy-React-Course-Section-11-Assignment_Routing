import React, { Component } from 'react';
import './Course.css';

class Course extends Component {

    componentDidMount () {
        console.log("[Course] component did mount.");
        console.log("Here are your props");
        console.log(this.props);
        console.log("****************************************");
    };
    componentDidUpdate () {
        console.log("[Course] component updated.");
        console.log("Here are your new props");
        console.log(this.props);
        console.log("****************************************");
    }

    componentWillUnmount () {
        console.log("[Course] component unmounted.");
        console.log("****************************************");
    }

    render () {
        let title = null;
        
        if(this.props.courseInfo){
            title = this.props.courseInfo.title;
        } else if(this.props.match.params.title) {
            title = this.props.match.params.title;
        }

        return (
            <div className="Course">
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.courseID}</p>
            </div>
        );
    }
}

export default Course;