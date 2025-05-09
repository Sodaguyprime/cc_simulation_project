import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MyModel from '../components/MyModel';
import {Middle} from '../components/MyModel.jsx';
import {Third} from '../components/MyModel.jsx';
import Sidebar from '../components/sidebar';
import First from '/2D_models/First_part.jpg';
import Middle_part from '/2D_models/Middle_part.jpg';
import Third_part from '/2D_models/Third_part.jpg';
// Dummy placeholder components
const InfoHeader = () => <div style={{ backgroundColor: '#eef', padding: '10px' }}>Info Page</div>;
const Description = () => <div style={{ backgroundColor: '#ddf', padding: '10px' }}>Photochemical Description</div>;
const MiddleDescription = () => <div style={{ backgroundColor: '#def', padding: '10px' }}>Middle Part Description</div>;

export default function App() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh' }}>
            {/* Sidebar */}
            <div style={{ backgroundColor: '#f2f2f2', borderRight: '1px solid #ccc' }}>
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto 1fr auto', gridTemplateColumns: '2fr 1fr', gap: '10px', padding: '10px' }}>

                {/* Row 1 - Info Page */}
                <div style={{ gridColumn: '1 / span 2' }}>
                    <h1 style={{textAlign: 'center'}}>Infopage</h1>
                </div>

                {/* Row 2 - Photochemical Description */}
                <div style={{ gridColumn: '1 / span 2' }}>
                    <Description />
                </div>

                {/* Row 3 - 3D Model and 2D Photo */}
                <div style={{ border: '1px double gray',
                height: '50vh', width: '50vh' }}>
                    <Canvas camera={{ position: [0, 2, 5] }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} />
                        <MyModel scale={1.5} position={[0, 0, 0]} />
                        <OrbitControls />
                    </Canvas>
                </div>
                <div>
                    <img src={First} alt="Logo" style={{ width: '60%', height: '60%' }} />;
                </div>

                {/* Row 4 - Middle Description */}
                <div style={{ gridColumn: '1 / span 2' }}>
                    <MiddleDescription />
                </div>
                <div style={{ border: '1px double gray',
                    height: '50vh', width: '50vh' }}>
                    <Canvas camera={{ position: [0, 2, 5] }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} />
                        <Middle scale={1.5} position={[0, 0, 0]} />
                        <OrbitControls />
                    </Canvas>
                </div>
                <div>
                    <img src={Middle_part} alt="Logo" style={{ width: '60%', height: '60%' }} />;
                </div>


                <div style={{ gridColumn: '1 / span 2' }}>
                    <MiddleDescription />
                </div>
                <div style={{ border: '1px double gray',
                    height: '50vh', width: '50vh' }}>
                    <Canvas camera={{ position: [0, 2, 5] }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} />
                        <Third scale={1.5} position={[0, 0, 0]} />
                        <OrbitControls />
                    </Canvas>
                </div>
                <div>
                    <img src={Third_part} alt="Logo" style={{ width: '60%', height: '60%' }} />;
                </div>
            </div>
        </div>
    );
}
