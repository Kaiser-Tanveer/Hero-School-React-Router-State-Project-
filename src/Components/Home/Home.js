import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic/Topic';

const Home = () => {
    const topics = useLoaderData([]);
    const {data} = topics;
    // console.log(topics.data);
    return (
        <div className='row w-75 d-flex justify-content-center mx-auto py-5'>
            {
                data.map(topic=> <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Home;