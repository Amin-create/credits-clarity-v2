import React, { useState } from 'react'
import { Core } from '..';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Icons from '../icons';

const menu = [
    {
        icon: <Icons name="Home" />,
        path: "/dashboard",
        name: "Dashboard",
    },
    {
        icon: <Icons name="Graph" />,
        path: "credit-reports",
        name: "Credit Reports",
    },
    {
        icon: <Icons name="Bell3" />,
        path: "notification",
        name: "Notification",
    },
    {
        icon: <Icons name="Setting2" />,
        path: "setting",
        name: "Setting",
    },

]


function DashboardLayout() { 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-scree n bg-layout">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                menu={menu}
            />
            <div className="flex flex-col flex-1">
                <Header toggleSidebar={toggleSidebar} />
                <main className="overflow-y-auto overflow-x-hidden flex-1 bg-gray-9 p-6">
                    <Outlet />
                </main>
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    )
}

export default DashboardLayout