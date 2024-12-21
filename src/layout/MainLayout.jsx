import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <hr />
            <Outlet></Outlet>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;