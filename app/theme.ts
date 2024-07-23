import {extendTheme} from '@chakra-ui/react';
import Button from "@/app/defineStyle";

const theme = extendTheme({
    components: {
        Button,
        Radio: {
            baseStyle: {
                control: {
                    _checked: {
                        bg: "black", // Ensures the radio fill is black
                        borderColor: "black",
                        backgroundColor: "black",
                        _hover: {
                            bg: "black",
                            borderColor: "black",
                        },
                        _before: {
                            width: 0
                        }
                    },
                },
            },
        },
    },
});

export default theme;
