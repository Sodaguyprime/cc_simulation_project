import React from 'react';
import './Topbar.css';
import logo from '/Logo.png';
export default function Topbar() {
    return (
        <div className="topbar" style={{
            borderStyle: 'solid'
        }}>
            <img
                src={logo}
                alt="Logo"
                style={{ height: '80px', marginRight: '10px' }}
            />
            <h1 style={{ fontSize: '20px', margin: 0 }}>Dashboard</h1>
        </div>
    );
}