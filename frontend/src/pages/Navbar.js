import React, { useState, useEffect } from 'react';
import { IconButton, InputBase, Badge } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';

function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hidden, setHidden] = useState(true); // Initially hidden
    const threshold = 100; // Threshold distance to reveal navbar when scrolling up

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            if (window.scrollY > threshold) {
                if (window.scrollY > lastScrollY) {
                    // Scrolling down
                    setHidden(true);
                } else {
                    // Scrolling up
                    setHidden(false);
                }
            } else {
                // If above the threshold, keep navbar hidden
                setHidden(true);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, scrollY]);

    const navbarStyle = {
        display: hidden ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 30px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly opaque background
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add box shadow
        borderRadius: "0", // Remove border radius if needed
        margin: '0px -20px',
        position: 'fixed', // Make navbar fixed
        top: 0, // Stick to the top
        width: '100%', // Full width
        zIndex: 10, // Ensure it is above the image and other content
        transition: 'all 0.3s ease-in-out', // Smooth transition
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
            <h1 style={{ color: '#000' }}>Crop Wise</h1>
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
                            <Notifications style={{ color: '#000' }} />
                        </Badge>
                    </IconButton>
                    <IconButton size="large">
                        <AccountCircle style={{ color: '#000' }} />
                    </IconButton>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
