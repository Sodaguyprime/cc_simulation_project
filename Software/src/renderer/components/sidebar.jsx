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
                <li className="menu-item">Home</li>
                <Link to ="/info"> <li className="menu-item">  info </li> </Link>
                <li className="menu-item">Output</li>
            </ul>

            {/* Bottom navigation items */}
            <ul className="menu bottom">
                <li className="menu-item">Settings</li>
                <li className="menu-item">About / Contact Us</li>
            </ul>
        </div>
    );
}
