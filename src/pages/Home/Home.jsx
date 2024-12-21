import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div className='min-h-screen w-11/12 mx-auto'>       
            <Banner></Banner>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;