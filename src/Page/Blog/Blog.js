import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center border-bottom text-primary'>Answer the Question</h1>
            <div className='row mb-5 '>
                <div className='border col '>
                    <h5>Difference between authorization and authentication?</h5>
                    <p>So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p>
                </div>
                <div className='border col mx-2'>
                    <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
                <div className='border col'>
                    <h5>What other services does firebase provide other than authentication?</h5>
                    <p>The core features of Firebase include NoSQL databases, real-time queries, scalable hosting, data storage, file storage, REST APIs, authentication, machine learning, and analytics.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;