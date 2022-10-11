import React from 'react';

const NotFound = () => {
    return (
        <div className='mt-5'>
            <div className='mt-5 border border-start-0 border-end-0 border-danger shadow'>
            <h1 className='text-warning pt-5'>404!!!</h1>
            <p className='text-light pb-5'>Sorry!!! The server you're trying to redirect is Not found.</p>
            </div>
        </div>
    );
};

export default NotFound;