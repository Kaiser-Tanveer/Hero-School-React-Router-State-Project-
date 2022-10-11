import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic/Topic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData([]);
    const {data} = topics;
    console.log(topics.data);
    return (
        <div className='row w-75 d-flex justify-content-center mx-auto py-5'>
            <div className='mt-5 d-flex mx-auto justify-content-center'>
                <img src="homeBanner.png" className='home-banner rounded m-2' alt="" />
                <h1 className='text-light'>Best <span className='text-warning'>Online Classroom</span> Ever</h1>
            </div>
                <p className='w-75 mb-5 text-light'>"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them." - Andrew Hunt</p>
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