import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, InputBase, Badge } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';

function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setHidden(window.scrollY > scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const navbarStyle = {
        display: hidden ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 30px',
        backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
        boxShadow: 'none', // Remove box shadow for transparency
        borderRadius: "0", // Remove border radius if needed
        margin: '0px -20px',
        position: 'fixed', // Make navbar fixed
        top: 0, // Stick to the top
        width: '100%', // Full width
        zIndex: 10, // Ensure it is above the image and other content
    };

    const navbarContentStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    };

    const navbarActionsStyle = {
        display: 'flex',
        alignItems: 'center',
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
