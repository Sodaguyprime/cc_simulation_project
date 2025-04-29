import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import InfoPage from './Pages/InfoPage.jsx';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} /> {/* <== This connects /info to InfoPage */}
        </Routes>
    );
}
