'use client'
import {Button as ChakraButton, useStyleConfig} from '@chakra-ui/react';

export const Btn = ({variant, text}) => {
    const styles = useStyleConfig('Button', {variant});
    return (
        <ChakraButton sx={styles}>
            {text}
        </ChakraButton>
    );
};
