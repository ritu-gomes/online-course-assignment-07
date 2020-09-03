import React from 'react';
import './enrolled.css';

const Enrolled = (props) => {
    const totalCourse = props.courseList.length;
    const totalPrice = props.courseList.reduce((total,price) => {
        total += Number(price.prize);
        return total;
    },0)
    return (
        <div className="enrolled-courses container sticky-top">
            <h3>Your Courses: {totalCourse}</h3>
            <h4>Total Price: {totalPrice}</h4>
        </div>
    );
};

export default Enrolled;