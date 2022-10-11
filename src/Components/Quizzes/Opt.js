import React from 'react';
const Opt = ({option, correctAnswer}) => {
    return (
        <div className='row'>
            <p className='w-50 mx-auto text-start'><input type="radio" className='form-check-input" type="radio" value=""'></input> {option}</p>
        </div>
    );
};

export default Opt;