import React from 'react';
import { Box, Typography, Button, IconButton, TextField, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(34, 139, 34, 0.7)',
    color: '#fff',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const FooterSection = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const FooterColumn = styled(Box)(({ theme }) => ({
    flex: '1',
    margin: '0 20px',
    [theme.breakpoints.down('md')]: {
        margin: '10px 0',
    },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
}));

const FooterLink = styled(Typography)(({ theme }) => ({
    marginBottom: '10px',
    color: '#ccc',
    '&:hover': {
        color: '#fff',
        textDecoration: 'underline',
    },
}));

const FooterSocialMedia = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
}));

const FooterButton = styled(Button)(({ theme }) => ({
    marginTop: '20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#0056b3',
    },
}));

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <FooterColumn>
                    <FooterTitle>About Us</FooterTitle>
                    <FooterLink>Our Story</FooterLink>
                    <FooterLink>Careers</FooterLink>
                    <FooterLink>Press</FooterLink>
                    <FooterLink>Contact Us</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Quick Links</FooterTitle>
                    <FooterLink>Privacy Policy</FooterLink>
                    <FooterLink>Terms of Service</FooterLink>
                    <FooterLink>FAQ</FooterLink>
                    <FooterLink>Support</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Subscribe</FooterTitle>
                    <TextField
                        variant="outlined"
                        placeholder="Your Email"
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                    />
                    <FooterButton variant="contained">Subscribe</FooterButton>
                </FooterColumn>
            </FooterSection>
            <Divider sx={{ margin: '20px 0', backgroundColor: '#444' }} />
            <FooterSocialMedia>
                <IconButton color="inherit">
                    <Facebook />
                </IconButton>
                <IconButton color="inherit">
                    <Twitter />
                </IconButton>
                <IconButton color="inherit">
                    <Instagram />
                </IconButton>
                <IconButton color="inherit">
                    <LinkedIn />
                </IconButton>
                <IconButton color="inherit">
                    <YouTube />
                </IconButton>
            </FooterSocialMedia>
            <Typography variant="body2" sx={{ marginTop: '20px', color: '#ccc' }}>
                © 2024 Your Company. All Rights Reserved.
            </Typography>
        </FooterContainer>
    );
};

export default Footer;
