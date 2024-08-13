// @ts-nocheck

'use client';
import { Button as ChakraButton, useStyleConfig } from '@chakra-ui/react';

interface BtnProps {
    variant: string;
    size: string; // You might want to restrict this to specific sizes like 'sm', 'md', 'lg'
    text: string;
}

// Define the Btn component with proper typing
export const Btn: React.FC<BtnProps> = ({ variant, size, text, ...props }) => {
    const styles = useStyleConfig('Button', { variant, size });
    return (
        <ChakraButton sx={{ ...styles, width: 'auto', minWidth: styles.width }} {...props}>
            {text}
        </ChakraButton>
    );
};
