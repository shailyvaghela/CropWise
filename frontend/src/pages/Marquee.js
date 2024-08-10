// Marquee.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const MarqueeContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflowX: 'hidden',
  backgroundColor: '#588456',
  color: '#E4B3D6',
  fontSize: '17px',
  fontWeight: 500,
  padding: '0px',
  height: '60px',
}));

const MarqueeContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  margin: '10px 0',
  width: '100%',
  animation: 'marquee 10s linear infinite',
  '@keyframes marquee': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
}));

const RollWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginRight: '20px', // Space between items
}));

const Marquee = () => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        {[...Array(6)].map((_, index) => (
          <RollWrapper key={index}>
            <img
              src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471"
              alt="plants grow people"
              width="32"
              height="32"
            />
            <Typography>plants grow people</Typography>
          </RollWrapper>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;
