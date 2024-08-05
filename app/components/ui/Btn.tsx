'use client'
import {Button as ChakraButton, useStyleConfig} from '@chakra-ui/react';

export const Btn = ({variant, size, text, ...props}) => {
    const styles = useStyleConfig('Button', {variant, size});
    return (
        <ChakraButton sx={{...styles, width: 'auto', minWidth: styles.width}} {...props}>
            {text}
        </ChakraButton>
    );
};