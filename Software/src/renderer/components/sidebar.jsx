import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { BsInfoSquareFill } from "react-icons/bs";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
export default function Sidebar() {
    return (
        <div className="sidebar"    style={{
            borderStyle: 'solid'
        }}>
            {/* Top navigation items */}
            <ul className="menu">
                <IoHome /><Link to ="/"> <li className="menu-item">Home</li>     </Link>
                <BsInfoSquareFill /><Link to ="/info"> <li className="menu-item">  info </li> </Link>
                <RiChatHistoryFill /> <Link to="/History"> <li className="menu-item">Simulation History</li> </Link>
            </ul>

            {/* Bottom navigation items */}
            <ul className="menu bottom">
                <IoMdSettings /><Link to={"/Settings"}> <li className="menu-item">Settings</li> </Link>
                <IoMdContact /> <Link to={"/Contactus"}> <li className="menu-item">About / Contact Us</li></Link>
            </ul>
        </div>
    );
}
