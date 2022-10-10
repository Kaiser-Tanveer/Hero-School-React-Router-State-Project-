import React from 'react';

const Topic = ({topic}) => {
    const {name, logo, total} = topic;
    console.log(topic);
    return (
        <div className='card col-3 m-2'>
            <img className='w-100' src={logo} alt="" />
            <h2>Name: {name}</h2>
            <p>Total Questions: {total}</p>
        </div>
    );
};

export default Topic;