import React from 'react';
import Opt from './Opt';

const Quiz = ({quiz}) => {
    // console.log(quiz);
    const {options, question, correctAnswer} = quiz;
    // console.log(options);
    return (
        <div className='w-75 mx-auto'>
            <h5>Q: {question}</h5>
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
        </div>
    );
};

export default Quiz;