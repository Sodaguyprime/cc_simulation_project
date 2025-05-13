import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { BsInfoSquareFill } from "react-icons/bs";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

export default function Sidebar() {
    const [isexpanded, setIsexpanded] = React.useState(() => {
        const saved = localStorage.getItem('sidebar-expanded');
        return saved === null ? true : JSON.parse(saved);
    });

    const togglesidebar = () => {
        const newState = !isexpanded;
        setIsexpanded(newState);
        localStorage.setItem('sidebar-expanded', JSON.stringify(newState));
    };

    // Menu items data for cleaner rendering
    const topMenuItems = [
        { path: "/", icon: <IoHome size={20} />, label: "Home" },
        { path: "/info", icon: <BsInfoSquareFill size={20} />, label: "Info" },
        { path: "/History", icon: <RiChatHistoryFill size={20} />, label: "Simulation History" }
    ];

    const bottomMenuItems = [
        { path: "/Settings", icon: <IoMdSettings size={20} />, label: "Settings" },
        { path: "/Contactus", icon: <IoMdContact size={20} />, label: "About Us" }
    ];

    // Render a menu item with proper styling and tooltip
    const renderMenuItem = (item, index) => (
        <Link to={item.path} className="menu-item-link" key={index}>
            <li
                className="menu-item"
                title={!isexpanded ? item.label : ""}
            >
                <div className="menu-icon">{item.icon}</div>
                {isexpanded && <span className="menu-text">{item.label}</span>}
                {!isexpanded && <span className="tooltip-text">{item.label}</span>}
            </li>
        </Link>
    );

    return (
        <div className="sidebar" style={{
            width: isexpanded ? '220px' : '60px',
            transition: 'width 0.3s ease'
        }}>
            {/* Top navigation items */}
            <div className="sidebar-header">
                {isexpanded && <h3 className="sidebar-title">Dashboard</h3>}
            </div>

            <ul className="menu">
                {topMenuItems.map(renderMenuItem)}
            </ul>

            {/* Bottom navigation items */}
            <ul className="menu bottom">
                {bottomMenuItems.map(renderMenuItem)}
            </ul>

            <button
                onClick={togglesidebar}
                className="toggle-button"
                aria-label={isexpanded ? "Collapse sidebar" : "Expand sidebar"}
            >
                {isexpanded ? '◀' : '▶'}
            </button>
        </div>
    );
}