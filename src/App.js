import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Enrolled from './components/Enrolled/Enrolled';
import Courses from './components/Courses/Courses';

function App() {
  const [course,setCourse] = useState([]);
  const [list,setList] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/ritu-gomes/online-courses/db')
    .then(res => res.json())
    .then(data => setCourse(data.courses))
  },
    [])
  const eventHandle = (course) => {
    const newList = [...list,course]
    setList(newList);
  }
  return (
    <div className="App">
      <Header></Header>
      <Enrolled courseList={list}></Enrolled>
      <div>
        {course.map(item => <Courses event={eventHandle} key={item.id} course={item}></Courses>)}
      </div>
    </div>
  );
}

export default App;
