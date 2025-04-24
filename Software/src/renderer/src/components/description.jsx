// src/components/DescriptionBox.jsx
import React from 'react';

export default function DescriptionBox() {
    return (
        <div style={{
            flex: 2,
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            borderStyle: 'solid'
        }}>
            <h2>Description</h2>
            <p>
                This is the carbon capture dashboard. It monitors CO₂ levels and displays system performance,
                capture rates, and more.
            </p>
        </div>
    );
}
