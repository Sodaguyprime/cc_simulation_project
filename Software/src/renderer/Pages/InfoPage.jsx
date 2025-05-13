import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MyModel, { Middle, Third } from '../components/MyModel';
import Sidebar from '../components/sidebar';

// Import images
import First from '/2D_models/First_part.jpg';
import Middle_part from '/2D_models/Middle_part.jpg';
import Third_part from '/2D_models/Third_part.jpg';

// Component for section headers
const SectionHeader = ({ title }) => (
    <h2 style={{ backgroundColor: '#def', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
        {title}
    </h2>
);

// Component for 3D model displays
const ModelDisplay = ({ ModelComponent }) => (
    <div style={{ border: '1px solid gray', borderRadius: '4px', height: '50vh', width: '50vh' }}>
        <Canvas camera={{ position: [0, 2, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} />
            <ModelComponent scale={1.5} position={[0, 0, 0]} />
            <OrbitControls />
        </Canvas>
    </div>
);

// Component for image displays
const ImageDisplay = ({ src }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <img src={src} alt="Model view" style={{ width: '80%', height: 'auto', borderRadius: '4px' }} />
    </div>
);

// Main component sections
const ModelSection = ({ title, ModelComponent, imageSrc }) => (
    <>
        <div style={{ gridColumn: '1 / span 2' }}>
            <SectionHeader title={title} />
        </div>
        <ModelDisplay ModelComponent={ModelComponent} />
        <ImageDisplay src={imageSrc} />
    </>
);

export default function InfoPage() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar - Fixed position like in Input.jsx */}
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

            {/* Main Content Area - With margin to account for sidebar */}
            <div style={{
                marginLeft: '200px',
                width: 'calc(100% - 200px)',
                display: 'grid',
                gridTemplateRows: 'auto auto 1fr',
                gridTemplateColumns: '2fr 1fr',
                gap: '20px',
                padding: '20px',
                overflow: 'auto'
            }}>
                {/* Header */}
                <div style={{ gridColumn: '1 / span 2' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Info Page</h1>
                    <div style={{ backgroundColor: '#eef', padding: '15px', borderRadius: '4px' }}>
                        <h3>Photochemical Description</h3>
                        <p>This page shows the three main components of our photochemical process.</p>
                    </div>
                </div>

                {/* First Model Section */}
                <ModelSection
                    title="First Component"
                    ModelComponent={MyModel}
                    imageSrc={First}
                />

                {/* Middle Model Section */}
                <ModelSection
                    title="Middle Component"
                    ModelComponent={Middle}
                    imageSrc={Middle_part}
                />

                {/* Third Model Section */}
                <ModelSection
                    title="Third Component"
                    ModelComponent={Third}
                    imageSrc={Third_part}
                />
            </div>
        </div>
    );
}