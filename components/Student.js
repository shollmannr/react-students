import React from 'react';
import Score from './Score';

const Student = (props) => {
    return (
        <div className="student">
        <h1 className="student-name">{props.student.name}</h1>
        <p className="student-bio">{props.student.bio}</p>
        {
            props.student.scores.map((item, index) => (
            <Score key={index} score={item.score} date={item.date}/>
            ))
            }
        </div>
    );
};

export default Student;