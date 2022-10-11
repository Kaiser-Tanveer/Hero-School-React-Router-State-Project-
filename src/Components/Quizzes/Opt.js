import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Opt = ({option, correctAnswer}) => {

    const checkHandler = () => {
        if(option === correctAnswer){
            toast('True');
        }
        else{
            toast('False');
        }
        console.log(option, correctAnswer);
        
    }
    return (
        <>
        <div>
            <p className='w-50 mx-auto text-start'><input onChange={()=>checkHandler()} type="radio" className='form-check-input" type="radio"'></input>{option}</p>
        </div>
        </>
    );
};

export default Opt;