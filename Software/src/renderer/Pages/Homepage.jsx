import React from 'react';
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';
import LogoStartBox from '../components/startarea';
import DescriptionBox from '../components/description';
import PageFooter from '../components/pagefooter';

export default function Homepage() {
    return (

        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

            {/* Fixed Sidebar */}
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

            {/* Main Content Area */}
            <div style={{
                marginLeft: '200px', // same as sidebar width
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#e0e0e0',
                height: '100vh',
                overflow: 'hidden'
            }}>
                <Topbar />

                {/* Scrollable Content */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        padding: '20px',
                        gap: '20px',
                        backgroundColor: '#ffffff'
                    }}>
                        <DescriptionBox />
                        <LogoStartBox />
                    </div>

                    <PageFooter />
                </div>
            </div>
        </div>
    );
}
