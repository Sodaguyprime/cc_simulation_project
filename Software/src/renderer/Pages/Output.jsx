
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MyModel from '../components/MyModel';
import Sidebar from '../components/sidebar';

export default function App() {
    return (
        <div>

            <div style={{
                width: '200px',
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                backgroundColor: '#f2f2f2',
                borderRight: '1px solid #ccc',
                zIndex: 10
            }}>
                <Sidebar />
            </div>
            <h2 style={{
                textAlignLast: 'center'
            }}>This is the Output page, Things will be displayed here </h2>
        </div>
    );
}
