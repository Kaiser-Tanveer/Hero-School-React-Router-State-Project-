import React from 'react';
import './Quizzes.css'
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    // console.log(quizzes);
    const {data} = quizzes;
    const {logo, name, questions, total} = data;
    // console.log(questions);
    return (
        <div className='bg-light'>
            <div className='topic-banner d-flex justify-content-center align-items-center'>
            <img className='m-2 bg-light' src={logo} alt="" />
            <h1>{name}</h1>
            </div>
            <p>Total Questions: {total}</p>
            <div className='card'>
                {
                    questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizzes;