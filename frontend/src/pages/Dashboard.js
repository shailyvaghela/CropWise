import React, { useState, useEffect } from 'react';
import bg1 from '../assets/image.png';
import Navbar from '../components/Navbar';
import { IconButton, Box, Typography, Card, CardMedia, CardContent, Divider, TextField, Button, Grid, Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Marquee from './Marquee';

// Styles for the carousel
const CarouselContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '80%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 2,
}));

const CarouselItem = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.5s ease-in-out',
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
}));

const LeftArrow = styled(ArrowButton)({
    left: 0,
});

const RightArrow = styled(ArrowButton)({
    right: 0,
});

// Styles for the overlay
const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
}));

const OfferOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(34, 139, 34, 0.7)',
    zIndex: 2,
}));

const OfferContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
    padding: '20px 0',
    position: 'relative',
    zIndex: 4,
}));

const OfferImage = styled(CardMedia)(({ theme }) => ({
    height: '60%',
    backgroundSize: 'cover',
}));

const OfferContent = styled(CardContent)(({ theme }) => ({
    padding: '16px',
    textAlign: 'center',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

const BackgroundContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    overflow: 'hidden',
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
    zIndex: 3,
}));

const OfferItem = styled(Card)(({ theme }) => ({
    width: '250px',
    height: '400px',
    margin: '10px',
    borderRadius: '15px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#fff',
    zIndex: 5,
}));

const OfferItemMedia = styled(CardMedia)({
    height: '200px',
});

const OfferItemContent = styled(CardContent)({
    padding: '15px',
});

// Styles for the crop submission form
const FormContainer = styled(Box)(({ theme }) => ({
    width: '80%',
    maxWidth: '900px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
}));

const FormField = styled(TextField)(({ theme }) => ({
    marginBottom: '20px',
    '& .MuiInputLabel-root': {
        color: '#333',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ddd',
        },
        '&:hover fieldset': {
            borderColor: '#aaa',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#28a745',
        },
    },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: '#218838',
    },
}));

const FormTitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '24px',
}));

const CropImagePreview = styled(Box)(({ theme }) => ({
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    border: '2px dashed #ddd',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
}));

const offers = [
    { title: 'Crop Yield', description: 'Accurate crop yield estimation for better planning.', image: 'crop.jpg' },
    { title: 'Seed Quality', description: 'Analyze and improve your seed quality.', image: 'crop1.jpg' },
    { title: 'Climate Conditions', description: 'Monitor and adapt to changing climate conditions.', image: 'crop2.jpeg' },
    { title: 'Soil Fertility', description: 'Assess soil fertility for optimal growth.', image: 'crop3.jpg' },
];

const Dashboard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagePreview, setImagePreview] = useState(null);

    const slides = [
        'Optimize Your Crop Yields with Real-Time Data',
        'Monitor Soil Health and Improve Fertilization Strategies',
        'Stay Ahead with Market Price Predictions and Alerts',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <img src={bg1} alt="agri1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Overlay />
                <CarouselContainer>
                    {slides.map((slide, index) => (
                        <CarouselItem
                            key={index}
                            style={{
                                opacity: currentIndex === index ? 1 : 0,
                            }}
                        >
                            <Typography
                                variant="h4"
                                style={{
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}
                            >
                                {slide}
                            </Typography>
                        </CarouselItem>
                    ))}
                    <LeftArrow onClick={handlePrev}>
                        <ChevronLeft style={{ color: 'white' }} />
                    </LeftArrow>
                    <RightArrow onClick={handleNext}>
                        <ChevronRight style={{ color: 'white' }} />
                    </RightArrow>
                </CarouselContainer>
            </div>

            <Marquee />

            <BackgroundContainer>
                <OfferOverlay />
                <Typography variant="h4" style={{ textAlign: 'center', marginTop: '50px', color: '#fff', zIndex: 3 }}>
                    What We Offer
                </Typography>
                <OfferContainer>
                    {offers.map((offer, index) => (
                        <OfferItem key={index}>
                                                        <OfferImage image={require(`../assets/${offer.image}`)} title={offer.title} />
                            <OfferContent>
                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>{offer.title}</Typography>
                                <Typography variant="body2" color="textSecondary">{offer.description}</Typography>
                            </OfferContent>
                        </OfferItem>
                    ))}
                </OfferContainer>
            </BackgroundContainer>
            <Marquee />

            {/* Crop Submission Form */}
            <Box style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
                <FormContainer>
                    <FormTitle>Submit Your Crop Data</FormTitle>
                    <form>
                        <CropImagePreview>
                            {imagePreview ? (
                                <img src={imagePreview} alt="Crop Preview" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '10px' }} />
                            ) : (
                                <Typography variant="body1" style={{ color: '#888' }}>No image selected</Typography>
                            )}
                        </CropImagePreview>
                        <FormField
                            fullWidth
                            label="Crop Image"
                            type="file"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            margin="normal"
                            onChange={handleImageChange}
                        />
                        <FormField
                            fullWidth
                            label="Crop Name"
                            variant="outlined"
                            margin="normal"
                        />
                        <FormField
                            fullWidth
                            label="Crop Details"
                            multiline
                            rows={4}
                            variant="outlined"
                            margin="normal"
                        />
                        <FormField
                            fullWidth
                            label="Additional Notes"
                            multiline
                            rows={4}
                            variant="outlined"
                            margin="normal"
                        />
                        <Box display="flex" justifyContent="center">
                            <SubmitButton type="submit" variant="contained">
                                Submit
                            </SubmitButton>
                        </Box>
                    </form>
                </FormContainer>
            </Box>
            <Marquee />
        </div>
    );
};

export default Dashboard;

