import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from '../Chairperson/Dashboard';
import RCDashboard from '../ROLLCALL/RCDashboard';
import MCDashboard from '../MCAUS/MCDashboard';
import VDashboard from '../MCAUS/Voting/VDashboard';
import MDashboard from '../MCAUS/Motion/MDashboard';
import GSLDashboard from '../GSL/GSLDashboard';

const Layout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar/>

            {/* Main Content */}
            <main className="flex-grow h-screen ">
                <div >
                    <MCDashboard/>
                </div>
            </main>

            {/* Toggle Sidebar Button (visible on mobile) */}
            
        </div>
    );
};

export default Layout;
