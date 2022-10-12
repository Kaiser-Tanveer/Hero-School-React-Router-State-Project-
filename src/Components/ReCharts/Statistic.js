import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, } from 'recharts';

const Statistic = () => {
    const reChart = useLoaderData().data;
    console.log(reChart);
    return (
        <div className='bg-light pb-5'>
                <h2 className='text-center py-4'>Chart on the Topical Quest</h2>
            <div className='mx-auto pb-5'>
                <div className='mx-auto pb-5'>
                        <LineChart className='w-100'
                        width={300}
                        height={200}
                        data={reChart}
                        >
                        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                        <XAxis dataKey="name"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Line
                        type="monotone" dataKey="total"
                        stroke='orange'
                        strokeWidth={2}
                        ></Line>
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Statistic;