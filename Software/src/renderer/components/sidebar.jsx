import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar"    style={{
            borderStyle: 'solid'
        }}>
            {/* Top navigation items */}
            <ul className="menu">
                <Link to ="/"> <li className="menu-item">Home</li>     </Link>
                <Link to ="/info"> <li className="menu-item">  info </li> </Link>
                <Link to="/History"> <li className="menu-item">Simulation History</li> </Link>
            </ul>

            {/* Bottom navigation items */}
            <ul className="menu bottom">
                <li className="menu-item">Settings</li>
                <li className="menu-item">About / Contact Us</li>
            </ul>
        </div>
    );
}
