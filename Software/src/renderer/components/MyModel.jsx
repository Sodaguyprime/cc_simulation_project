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

export  function Middle(props) {
    const { scene } = useGLTF('/models/Middlepart.glb');
    return <primitive object={scene} {...props} />;
}
useGLTF.preload('/models/Middlepart.glb');

export  function Third(props) {
    const { scene } = useGLTF('/models/3rd_part.glb');
    return <primitive object={scene} {...props} />;
}
useGLTF.preload('/models/3rd_part.glb');

export  function hidden(props) {
    const { scene } = useGLTF('/models/Hidden.glb');
    return <primitive object={scene} {...props} />;
}
useGLTF.preload('/models/Hidden.glb');