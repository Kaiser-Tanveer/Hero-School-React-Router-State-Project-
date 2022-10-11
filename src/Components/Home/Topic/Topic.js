import React from 'react';
import './Topic.css'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    // console.log(topic);
    return (
        <div className='card  col-md-4 col-lg-3 m-2 p-2'>
            <img className='w-100 bg-dark rounded-top' src={logo} alt="" />
            <p>Total Questions: {total}</p>
            <div className='d-flex justify-content-between align-items-center'>
            <h5 className='text-primary fw-bold'>{name}</h5>
            <Link to={`topic/${id}`}><button className='btn btn-primary fw-bold'>Explore <ArrowSmallRightIcon className='btn-icon'></ArrowSmallRightIcon></button></Link>
            

            </div>
        </div>
    );
};

export default Topic;