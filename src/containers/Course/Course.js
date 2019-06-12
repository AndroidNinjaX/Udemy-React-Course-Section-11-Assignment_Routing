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
        console.log(this.props);
        console.log("****************************************");
    }

    render () {

        /*------------------
        To display the Title as a "prop" or a "param".
        -First set a variable as "null".
        -Check if there is a "props.courseInfo".
        -If so, set "title" to the title in "courseInfo".
        -If not, set "title" to "param.title". 
            -This helps when you click on just 1 course, and have only "params".
        ------------------*/
        let title = null;
        
        if(this.props.courseInfo){
            title = this.props.courseInfo.title;
        } else {
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