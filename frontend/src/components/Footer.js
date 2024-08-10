import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}
            component="footer"
        >
            <Container maxWidth="lg">
                <Typography variant="body1">
                    © 2024 Crop Yield Estimator. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
