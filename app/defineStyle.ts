import {defineStyleConfig, keyframes} from '@chakra-ui/react';

// Define the keyframes for the hover-in animation
const fillAnimationIn = keyframes`
    0% {
        background-position: 0 0%;
    }
    100% {
        background-position: 0 100%;
    }
`;

// Define the keyframes for the hover-out animation
const fillAnimationOut = keyframes`
    0% {
        background-position: 0 100%;
    }
    100% {
        background-position: 0 0%;
    }
`;

const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: '600',
        borderRadius: 'none',
        padding: '24px',
    },
    variants: {
        primaryWhite: {
            bg: 'white',
            color: 'black',
            position: 'relative',
            backgroundSize: '100% 200%',
            backgroundPosition: '0 0%',
            transition: 'all 0.3s ease',
            bgGradient: 'linear(to-t, #224452 0%, #224452 50%, white 50%, white 100%)',
            animation: `${fillAnimationOut} 0.3s forwards`,
            _hover: {
                color: 'white',
                animation: `${fillAnimationIn} 0.3s forwards`,
            },
        },
        primaryBlack: {
            bg: 'black',
            color: 'white',
            position: 'relative',
            backgroundSize: '100% 200%',
            backgroundPosition: '0 0%',
            transition: 'all 0.3s ease',
            bgGradient: 'linear(to-t, #224452 0%, #224452 50%, black 50%, black 100%)',
            animation: `${fillAnimationOut} 0.3s forwards`,
            _hover: {
                color: 'white',
                animation: `${fillAnimationIn} 0.3s forwards`,
            },
        },
        secondary: {
            bg: 'transparent',
            textTransform: 'none',
            color: 'black',
            border: '1px solid black',
            fontWeight: 400,
            position: 'relative',
            backgroundSize: '100% 200%',
            backgroundPosition: '0 0%',
            transition: 'all 0.3s ease',
            _hover: {
                color: 'black',
                bg: '#D2CDBF',
                border: '1px solid transparent',

            },
        },
        tertiary: {
            textTransform: 'none',
            padding: '0',
            bg: 'transparent',
            color: 'black',
            fontSize: '18px',
            display: 'inline-flex',
            fontWeight: 400,
            position: 'relative',
            backgroundSize: '100% 200%',
            backgroundPosition: '0 0%',
            transition: 'all 0.3s ease',

            _hover: {
                textDecoration: 'underline'
            },
            '&::after': {
                content: `url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_774_4615)"><path d="M8 2L6.9425 3.0575L11.1275 7.25H2V8.75H11.1275L6.9425 12.9425L8 14L14 8L8 2Z" fill="black"/></g><defs><clipPath id="clip0_774_4615"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>')`,
                display: 'inline-block',
                marginLeft: '8px',
            },
        },
    },
    defaultProps: {
        variant: 'primaryWhite', // Set a single default variant
    },
});

export default Button;