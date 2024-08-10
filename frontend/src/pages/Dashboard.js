import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import seedImage from '../assets/seed-image.jpg'; // Example image

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Container sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Welcome to the Crop Yield Estimator Dashboard
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <img src={seedImage} alt="Seed Quality" style={{ width: '100%' }} />
                            <Typography variant="h6">Seed Quality Analysis</Typography>
                            <Typography>Analyze and input your seed quality details here.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">Fertility & Landscape</Typography>
                            <Typography>Enter land fertility and landscape details for yield estimation.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">Climatic Condition Analysis</Typography>
                            <Typography>Check the best time for cultivation based on climate data.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">Market Price Prediction</Typography>
                            <Typography>Get insights into current and expected market prices for crops.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Dashboard;
