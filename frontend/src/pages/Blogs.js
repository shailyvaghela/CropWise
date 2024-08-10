import React from 'react';
import { Box, Typography, Button, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const BlogContainer = styled(Box)(({ theme }) => ({
    padding: '20px',
    backgroundColor: '#f0f0f0',
}));

const BlogTitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
}));

const BlogGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
}));

const BlogCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    height: '600px', // Adjust height as needed
    '&:hover .overlay': {
        opacity: 1,
    },
}));

const BlogImage = styled(CardMedia)(({ theme }) => ({
    height: '100%',
    objectFit: 'cover',
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for better text visibility
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    zIndex: 2,
}));

const BlogText = styled(Typography)(({ theme }) => ({
    marginBottom: '15px',
}));

const BlogButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#333',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#555',
    },
}));

const BlogSection = () => {
    return (
        <BlogContainer>
            <BlogTitle>
                <i className="fa-solid fa-seedling"></i> Best Agricultural Practices
            </BlogTitle>
            <BlogGrid>
                <BlogCard>
                    <BlogImage image={require('../assets/blog_1.webp')} />
                    <Overlay className="overlay">
                        <Typography variant="h6">
                        Zero Budget Natural Farming (ZBNF)
                        </Typography>
                        <BlogText>
                        Developed by Subhash Palekar, ZBNF is a farming method that emphasizes natural farming practices without the need for external inputs like chemical fertilizers and pesticides. It focuses on maintaining soil health and ecosystem balance.
                        </BlogText>
                        <BlogButton variant="contained" endIcon={<i className="fa fa-chevron-right" aria-hidden="true"></i>}>
                            READ MORE
                        </BlogButton>
                    </Overlay>
                </BlogCard>
                <BlogCard>
                    <BlogImage image={require('../assets/blog_2.jpeg')} />
                    <Overlay className="overlay">
                        <Typography variant="h6">
                        Drip Irrigation
                        </Typography>
                        <BlogText>
                        Drip irrigation is a water-efficient technique that involves delivering water directly to the root zone of plants through a network of tubes, pipes, and emitters. This method conserves water and reduces evaporation and runoff.
                        </BlogText>
                        <BlogButton variant="contained" endIcon={<i className="fa fa-chevron-right" aria-hidden="true"></i>}>
                            READ MORE
                        </BlogButton>
                    </Overlay>
                </BlogCard>
                <BlogCard>
                    <BlogImage image={require('../assets/blog_3.webp')} />
                    <Overlay className="overlay">
                        <Typography variant="h6">
                        Integrated Pest Management (IPM)
                        </Typography>
                        <BlogText>
                        Integrated Pest Management (IPM) is a comprehensive and sustainable approach to managing agricultural pests, aiming to minimize their impact on crops while reducing reliance on chemical pesticides. IPM combines various strategies to manage pests in an economically and environmentally sound manner.
                        </BlogText>
                        <BlogButton variant="contained" endIcon={<i className="fa fa-chevron-right" aria-hidden="true"></i>}>
                            READ MORE
                        </BlogButton>
                    </Overlay>
                </BlogCard>
            </BlogGrid>
        </BlogContainer>
    );
};

export default BlogSection;
