import React from 'react';

const Blog = () => {
    return (
        <div className='bg-light py-5'>
            <div className="w-75 mx-auto row">
                <div className="q-1 bg-light col-md-6 col-lg-4 my-4">
                <div className='h-100 card rounded shadow mx-2'>
                <h2 className='bg-primary rounded-top text-white p-2'>Q-1: What is the purpose of React Router?</h2>
                <p className='px-5 mx-auto'><strong>React Router</strong> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                </div>
                <div className="q-2 bg-light col-md-6 col-lg-4 my-4">
                <div className='h-100 card rounded shadow mx-2'>
                <h2 className='bg-primary rounded-top text-white p-2'>Q-2: How does Context API works?</h2>
                <p className='px-5 mx-auto'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p>
                </div>
                </div>
                <div className="q-3 bg-light col-md-6 col-lg-4 my-4">
                <div className='h-100 card rounded shadow mx-2'>
                <h2 className='bg-primary rounded-top text-white p-2'>Q-2: Consult about useRef() Hook.</h2>
                <p className='px-5 mx-auto'>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. useRef() only returns one item. It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;