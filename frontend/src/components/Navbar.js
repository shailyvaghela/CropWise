import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, InputBase, Badge } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            // User is scrolling down
            setShowNavbar(false);
        } else {
            // User is scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const navbarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 30px',
        margin:"0px -20px 0px -20px",
        backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
        boxShadow: 'none', // Remove box shadow for transparency
        borderRadius: "0", // Remove border radius if needed
        position: 'fixed', // Make navbar fixed
        top: 0, // Stick to the top
        width: '100%', // Full width
        zIndex: 10, // Ensure it is above the image and other content
        transition: 'top 0.3s', // Smooth transition for hiding
        top: showNavbar ? '0' : '-100px', // Hide by moving the navbar up
    };

    const navbarContentStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    };

    const navLinksStyle = {
        display: 'flex',
        listStyle: 'none',
        padding: '0',
        margin: '0',
    };

    const navLinkStyle = {
        margin: '0 15px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff', // Change text color to white for visibility
        fontWeight: 500,
    };

    const navbarActionsStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto', // Move to the rightmost side
    };

    const searchBarStyle = {
        marginRight: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly transparent search bar
        borderRadius: '4px',
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    return (
        <nav style={navbarStyle}>
            <h1 style={{ color: '#fff' }}>Crop Wise</h1>
            <div style={navbarContentStyle}>
                <div style={navbarActionsStyle}>
                    <div style={searchBarStyle}>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            startAdornment={
                                <Search style={{ color: 'inherit' }} />
                            }
                        />
                    </div>
                    <IconButton size="large">
                        <Badge badgeContent={4} color="error">
                            <Notifications style={{ color: 'white' }} />
                        </Badge>
                    </IconButton>
                    <IconButton size="large">
                        <AccountCircle style={{ color: 'white' }} />
                    </IconButton>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
