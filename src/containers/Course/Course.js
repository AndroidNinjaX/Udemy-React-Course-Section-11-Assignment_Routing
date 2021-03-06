import React, { Component } from 'react';
import './Course.css';

//This component is to display a single course.
class Course extends Component {

    //To track this component in the console.
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
        To display the Title if I have as a "prop" or a "param".
        -First set a variable as "null", in this case "title".
        -Check if there is a "props.courseInfo".
        -If so, set "title" to the title in "courseInfo.title".
        -If not, set "title" to "param.title". 
            -This helps when you click on just 1 course, and have only "params".

        Also create another variable called "output" in this instance.
        -If I have "props", then I can also output the "ID".
        -If not, then I do not output the "ID" just the "title".
        -Either way, set "output" to some JSX that is outputted.
        ------------------*/
        let title = null;
        let output = null;
        
        if(this.props.courseInfo){
            title = this.props.courseInfo.title;
            output = <div>
                        <h1>{title}</h1>
                        <p>You selected the Course with ID: {this.props.courseInfo.id}</p>
                    </div>;
        } else {
            title = this.props.match.params.title;
            output = <div>
                        <h1>{title}</h1>
                        <p>This is an AWESOME Course!</p>
                    </div>;
        }

        //Display the JSX "output" variable. 
        return (
            <div className="Course">
                {output}
            </div>
        );
    }
}

export default Course;