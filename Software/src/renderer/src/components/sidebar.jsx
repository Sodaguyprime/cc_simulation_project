import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { BsInfoSquareFill } from "react-icons/bs";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoMdContact } from "react-icons/io";


export default function Sidebar() {
    const [isexpanded, setIsexpanded] = React.useState(true);

    const togglesidebar = () => {
        setIsexpanded(!isexpanded);
    }

    return (
        <div className="sidebar"    style={{
            borderStyle: 'solid',
            width: isexpanded? '200px': '60px',
            transition: 'width 0.3s'
        }}>
            {/* Top navigation items */}
            <ul className="menu">
                <Link to="/" className="menu-link-link">
                <li className="menu-item">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IoHome />
                        {isexpanded && <span style={{ marginLeft: '10px' }}>Home</span>}
                    </div>
                </li>
                </Link>
                <Link to="/info" className="menu-item-link">
                <li className="menu-item">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BsInfoSquareFill style={{ marginRight: isexpanded ? '10px' : '0' }} />
                    {isexpanded && <span>Info</span>}
                        </div>
                </li>
                </Link>
                <Link to="/History" className={"menu-item-link"}>
                <li className="menu-item">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <RiChatHistoryFill style={{ marginRight: isexpanded ? '10px' : '0' }} />
                        {isexpanded &&  <span> Simulation History</span>}
                        </div>
                </li>
                </Link>
            </ul>

            {/* Bottom navigation items */}
            <ul className="menu bottom">
                <Link to="/Settings" className={"menu-item-link"}>
                <li className="menu-item">
                    <IoMdSettings style={{ marginRight: isexpanded ? '10px' : '0' }} />
                    {isexpanded && <span>Settings</span>}
                </li>
                        </Link>
                <Link to="/Contactus" className={"menu-item-link"}>
                <li className="menu-item" >
                    <IoMdContact style={{ marginRight: isexpanded ? '10px' : '0' }} />
                    {isexpanded && <span>About US</span>}
                </li>
                </Link>
            </ul>
            <button onClick={togglesidebar} style={{
                marginTop: '20px',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '8px',
                width: '80%',
                cursor: 'pointer',
                border: 'none',
                backgroundColor: '#ccc',
                borderRadius: '4px'
            }}>
                {isexpanded ? '<' : '>'}
            </button>
        </div>
    );
}
