import React from 'react';
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';
import LogoStartBox from '../components/startarea';
import DescriptionBox from '../components/description';
import PageFooter from '../components/pagefooter';

/**
 * Homepage component - Main landing page of the application
 * Features a clean layout with sidebar navigation, description area, and call-to-action
 */
export default function Homepage() {
    // Layout configuration
    const layoutStyles = {
        container: {
            display: 'flex',
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: '#f8f9fa',
        },
        sidebar: {
            width: '200px',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#f2f2f2',
            borderRight: '1px solid #ccc',
            boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
            zIndex: 10,
        },
        mainContent: {
            marginLeft: '200px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
        },
        contentArea: {
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
        },
        contentContainer: {
            flex: 1,
            display: 'flex',
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            margin: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            justifyContent: 'space-between',
        },
    };

    return (
        <div style={layoutStyles.container}>
            {/* Navigation Sidebar */}
            <div style={layoutStyles.sidebar}>
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div style={layoutStyles.mainContent}>
                {/* Top Navigation Bar */}
                <Topbar />

                {/* Scrollable Content */}
                <div style={layoutStyles.contentArea}>
                    {/* Main Content Container */}
                    <div style={layoutStyles.contentContainer}>
                        {/* Left Column - Description */}
                        <div style={{ flex: 1, maxWidth: '70%', paddingRight: '40px' }}>
                            <DescriptionBox />
                        </div>

                        {/* Right Column - Call to Action */}
                        <div style={{ width: '250px', flexShrink: 0 }}>
                            <LogoStartBox />
                        </div>
                    </div>

                    {/* Page Footer */}
                    <PageFooter />
                </div>
            </div>
        </div>
    );
}