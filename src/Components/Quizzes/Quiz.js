import React from 'react';
import './Quiz.css'
import Opt from './Opt';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = ({quiz}) => {
    console.log(quiz);
    const {options, question, correctAnswer} = quiz;
    // console.log(options);
    return (
        <div className='w-75 mx-auto shadow my-5 py-3 rounded'>
            <h5 className='py-2 bg-primary text-white shadow'>Q: {question}</h5>
            <p>
                {
                    options.map((option, idx) => <Opt
                    key={idx}
                    option={option}
                    correctAnswer={correctAnswer}
                    >
                    </Opt>)
                }
            </p>
            <button className='border-0 bg-white'> Check Correct Answer <EyeIcon className='eye-icon'></EyeIcon></button>
        </div>
    );
};

export default Quiz;