import React from 'react';
import { useGLTF } from '@react-three/drei';

// Fermentor model
export default function MyModel(props) {
    const { scene } = useGLTF('/models/Fermentor.glb');
    return <primitive object={scene} {...props} />;
}
useGLTF.preload('/models/Fermentor.glb');

// Logo model
export  function Logo_model(props) {
    const { scene } = useGLTF('/models/3D_logo.glb');
    return <primitive object={scene} {...props} />;
}
useGLTF.preload('/models/3D_logo.glb');
