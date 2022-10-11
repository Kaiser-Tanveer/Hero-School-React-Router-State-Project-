import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
const Opt = ({option, correctAnswer}) => {
    return (
        <div className='row'>
            <p className='w-50 mx-auto text-start'><input type="radio" className='form-check-input" type="radio" value=""'></input> {option}</p>
            <EyeIcon className='eye-icon'></EyeIcon>
        </div>
    );
};

export default Opt;