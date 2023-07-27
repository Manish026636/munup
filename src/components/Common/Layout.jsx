import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from '../Chairperson/Dashboard';
import RCDashboard from '../ROLLCALL/RCDashboard';

const Layout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar/>

            {/* Main Content */}
            <main className="flex-grow ">
                <div >
                    <RCDashboard/>
                </div>
            </main>

            {/* Toggle Sidebar Button (visible on mobile) */}
            
        </div>
    );
};

export default Layout;
