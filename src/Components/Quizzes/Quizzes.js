import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizzes = () => {
    const quizzes = useLoaderData();
    console.log(quizzes.data);
    return (
        <div>
            This is Quiz
        </div>
    );
};

export default Quizzes;