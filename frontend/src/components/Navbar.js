import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Crop Yield Estimator
                </Typography>
                <Button color="inherit">Dashboard</Button>
                <Button color="inherit">Seed Quality</Button>
                <Button color="inherit">Analysis</Button>
                <Button color="inherit">Profile</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
