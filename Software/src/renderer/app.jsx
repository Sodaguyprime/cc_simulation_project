import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import InfoPage from './Pages/InfoPage.jsx';
import Input from './Pages/Input.jsx';
import History from './Pages/History.jsx';
import Output from './Pages/Output.jsx';
import Settings from './Pages/Settings.jsx';
import Contactus from './Pages/Contactus.jsx';
import './components/background.css'
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} /> {/* <== This connects /info to InfoPage */}
            <Route path="/Input" element={<Input />} />
            <Route path="/History" element={<History />} />
            <Route path="/Output" element={<Output />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Contactus" element={<Contactus />} />
        </Routes>
    );
}
