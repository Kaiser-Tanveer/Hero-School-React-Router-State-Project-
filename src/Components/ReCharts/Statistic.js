import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart';

const Statistic = () => {
    const topics = useLoaderData([]);
    // console.log(topics);
    const {data} = topics;
    return (
        <div className='bg-light'>
            <div className='w-50 me-auto mx-md-auto'>
                <h2 className='text-center'>Chart on the Topical Quest</h2>
                <div className='ms-lg-5'>
                {
                    data.map(topic => <Chart
                    key={topic.id}
                    topic={topic}

                    ></Chart>)
                }
                </div>
            </div>
        </div>
    );
};

export default Statistic;