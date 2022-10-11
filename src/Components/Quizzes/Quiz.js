import React, { useState } from 'react';
import './Quiz.css'
import Opt from './Opt';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = ({quiz}) => {
    console.log(quiz);
    const {options, question, correctAnswer} = quiz;
    // console.log(options);
    const [ans, setAns] = useState();
    const andHandler = (correctAnswer) => {
        setAns(correctAnswer);
        return ans;
    }
    return (
        <div className='w-75 mx-auto shadow my-5 rounded'>
            <h5 className='py-2  mt-0 bg-primary text-white rounded-top shadow'>Q: {question}</h5>
            <p className='pt-3'>
                {
                    options.map((option, idx) => <Opt
                    key={idx}
                    option={option}
                    ans={ans}
                    correctAnswer={correctAnswer}
                    >
                    </Opt>)
                }
            </p>
            <div className='d-flex flex-column-reverse flex-md-row justify-content-between p-2 border border-primary bg-light rounded-bottom shadow'>
                <h5 className='p-4'>Ans: {ans}</h5>
                <button onClick={()=>andHandler(correctAnswer)} className='border-0 bg-light'> Check Correct Answer <EyeIcon className='eye-icon'></EyeIcon></button>
            </div>
        </div>
    );
};

export default Quiz;