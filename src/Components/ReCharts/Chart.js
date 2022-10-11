import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const Chart = () => {
    // console.log(topic);
    // const {total} = topic;

    // reChart 
const topics = [
    {
        name: 'React',
        quests: 8,
    },
    {
        name: 'JavaScript',
        quests: 9,
    },
    {
        name: 'CSS',
        quests: 8,
    },
    {
        name: 'Git',
        quests: 11,
    }
    ];
    return (
        <div className='ms-lg-5'>
            <LineChart
            width={400}
            height={300}
            data={topics}
            >
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line 
                type="monotone" dataKey="quests"
                stroke='orange'
                strokeWidth={2}
                ></Line>
            </LineChart>
        </div>
    );
};

export default Chart;