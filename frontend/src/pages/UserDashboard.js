import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar, Divider, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

// Styles for the user dashboard
const DashboardContainer = styled(Box)(({ theme }) => ({
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
}));

const UserCard = styled(Card)(({ theme }) => ({
    marginBottom: '20px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const UserInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
}));

const UserProfile = styled(Avatar)(({ theme }) => ({
    width: '80px',
    height: '80px',
    marginRight: '20px',
}));

const AnalyticsCard = styled(Card)(({ theme }) => ({
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const UserDashboard = () => {
    const [userData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        submittedCrops: [
            { image: 'crop1.jpg', name: 'Wheat', details: 'High yield variety.' },
            { image: 'crop2.jpg', name: 'Corn', details: 'Grows well in summer.' }
        ],
        analytics: {
            totalSubmissions: 10,
            averageYield: '30 tons/ha'
        }
    });

    return (
        <DashboardContainer>
            <UserCard>
                <UserInfo>
                    <UserProfile src="profile.jpg" alt="Profile Picture" />
                    <div>
                        <Typography variant="h5">{userData.name}</Typography>
                        <Typography variant="body1">{userData.email}</Typography>
                    </div>
                </UserInfo>
                <Button variant="contained" color="primary">Edit Profile</Button>
            </UserCard>

            <AnalyticsCard>
                <Typography variant="h6" gutterBottom>Analytics</Typography>
                <Typography variant="body1">Total Submissions: {userData.analytics.totalSubmissions}</Typography>
                <Typography variant="body1">Average Yield: {userData.analytics.averageYield}</Typography>
            </AnalyticsCard>

            <Typography variant="h6" gutterBottom>Submitted Crops</Typography>
            <Grid container spacing={2}>
                {userData.submittedCrops.map((crop, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <img src={`../assets/${crop.image}`} alt={crop.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
                                <Typography variant="h6" gutterBottom>{crop.name}</Typography>
                                <Typography variant="body2">{crop.details}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </DashboardContainer>
    );
};

export default UserDashboard;
