import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { Logo_model } from './MyModel.jsx';

function RotatingLogo(props) {
    const ref = useRef();
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
        }
    });
    return <Logo_model ref={ref} {...props} />;
}

export default function LogoStartBox() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/input'); // Make sure route path is lowercase
    };

    return (
        <div
            onClick={handleClick}
            style={{
                width: '200px',
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <Canvas
                style={{ width: '150px', height: '150px' }}
                camera={{ position: [0, 0, 3], fov: 50 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[1, 1, 1]} />
                <Suspense fallback={null}>
                    <RotatingLogo scale={1.2} position={[0, 0, 0]} />
                </Suspense>
            </Canvas>
            <p style={{ marginTop: '10px', textAlign: 'center', fontSize: '14px' }}>
                Press on the logo to start simulating
            </p>
        </div>
    );
}
