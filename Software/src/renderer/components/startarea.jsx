// src/components/LogoStartBox.jsx
import React from 'react';

export default function LogoStartBox() {
    return (
        <div style={{
            flex: 1,
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            borderStyle: 'solid'
        }}>
            <img
                src="https://via.placeholder.com/100x100"  // replace with your logo
                alt="Logo"
                style={{ marginBottom: '20px' }}
            />
            <button style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
                Start
            </button>
        </div>
    );
}
