import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function MyModel(props) {
    const { scene } = useGLTF('/models/Fermentor.glb');
    return <primitive object={scene} {...props} />;
}
