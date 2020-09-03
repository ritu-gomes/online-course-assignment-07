import React from 'react';
import './courses.css';

const Courses = (props) => {
    const {name,prize,instructor} = props.course;
    const enrollHandler = props.event;
    return (
        <div className="courses container">
            <div className="row d-flex align-items-end">
                <div className="col-md-9">
                    <h2><span>Course</span>: {name}</h2>
                    <h5>At ${prize}</h5>
                    <h4>Instructor: {instructor}</h4>
                </div>
                <div className="col-md-3">
                    <button onClick={() => enrollHandler(props.course)} className="enroll">Enrolle Now</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;