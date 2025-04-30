
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

            s


        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            borderStyle: "dashed",
        } }>
        <Canvas camera={{ position: [0, 2, 5] }}>s
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} />
            <MyModel scale={1.5} position={[0, 0, 0]} />
            <OrbitControls />
        </Canvas>
        </div>
        </div>
    );
}
