// Import necessary dependencies
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';

// Define the component's props with TypeScript types
interface CustomButtonProps {
    label: string;
    iconSrc: string;
    onClick?: () => void;
}

const GreenCustomBookButton: React.FC<CustomButtonProps> = ({ label, iconSrc, onClick }) => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint

    return (
        <Button
            className="font-semibold"
            variant="outlined"
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: { xs: "160px", sm: "20vw", md: "200px"}, // Responsive width
                height: { xs: "42px", sm: "4.5vw", md: "3.1vw" , lg: "3.1vw"}, // Responsive height
                borderRadius: '50px',
                color: '#DCC5BD',
                fontSize: { xs: "11px", sm: "1vw" }, // Responsive font size
                fontWeight: 400,
                fontFamily: 'var(--font-montserrat)',
                fontSynthesisWeight: 600,
                backgroundColor: '#283C28',    // Default background color
                borderColor: 'transparent',   // Border color
                textTransform: 'none',
                px: isMobile ? '10px' : '15px', // Increase horizontal padding
                '&:hover': {
                    backgroundColor: '#283C28', // Hover background color
                    color: '#DCC5BD',          // Hover font color
                    borderColor: '#283C28',    // Hover border matches hover background
                },
            }}
        >
            <span>{label}</span>
            <Image
                src={iconSrc}
                alt="Button Icon"
                width={isMobile ? 20 : 25}
                height={isMobile ? 20 : 25}
                style={{
                    filter: 'brightness(0) saturate(100%) invert(89%) sepia(10%) saturate(320%) hue-rotate(15deg) brightness(93%) contrast(90%)',
                }}
            />
        </Button>
    );
};

export default GreenCustomBookButton;
