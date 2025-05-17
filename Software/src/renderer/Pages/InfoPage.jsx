// this document was made by the contributor: Ammar ,please refer to me in case u needed any questions

//i------------------importing our needed stuff------------------
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar'; // import our sidebar
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MyModel, { Middle, Third } from '../components/MyModel';
import First from '/2D_models/First_part.jpg';
import Middle_part from '/2D_models/Middle_part.jpg';
import Third_part from '/2D_models/Third_part.jpg';
import {modelPosition} from "three/src/Three.TSL.js";
//-------------------   Finish importing--------------------------


//function needed to make a header, takes in title area and imports the following the header + description
const SectionHeader = ({ title }) => (
    <h2 style={{ backgroundColor: '#def', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
        {title}
    </h2>
);


// function for 3D model displays, we pass in the needed
const ModelDisplay = ({ ModelComponent, modelPosition }) => {
    const position = ModelComponent === Third ? [0, 0, 0] : [0, -1.8, 0];
    return (
        <div style={{border: '3px solid gray', borderRadius: '4px', height: '50vh', width: '50vh'}}>
            <Canvas camera={{position: [0, 4, 6]}}>
                <ambientLight intensity={0.5}/>
                // best settings i found for ligh
                <directionalLight position={[0, 5, 5]}/> // this is the best settings i found for light
                <ModelComponent scale={2} position={position}/> // this line here makes the model rotatable: notes for
                future devs: dont change the 0,0,0.
                <OrbitControls/>
            </Canvas>
        </div>
    );
};

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



// This is the end of our function declaration area.



export default function InfoPage() {
    // -------------------------Settings and functions for the sidebar---------------
    const [sidebarWidth, setSidebarWidth] = useState('220px');
    const [isExpanded, setIsExpanded] = useState(true);
    const handleSidebarWidthChange = (width, expanded) => {
        setSidebarWidth(width);
        setIsExpanded(expanded);
    };
    // --------------------End of sidebar area thing--------------------------------


    return (
        //main div
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{
                width: sidebarWidth,
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                zIndex: 10,
                transition: 'width 0.3s ease'
            }}>
                <Sidebar onWidthChange={handleSidebarWidthChange} />
            </div>




            {/* Main Content Area - With dynamic margin matching sidebar width */}
            <div style={{
                marginLeft: sidebarWidth,
                width: `calc(100% - ${sidebarWidth})`,
                display: 'grid',
                gridTemplateRows: 'auto auto 1fr',
                gridTemplateColumns: '2fr 1fr',
                gap: '20px',
                padding: '20px',
                overflow: 'auto',
                transition: 'margin-left 0.3s ease, width 0.3s ease'
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
                    modelPosition={[0,0,0]}
                />
            </div>
        </div>
    );
}