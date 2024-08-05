import {extendTheme} from '@chakra-ui/react';
import Button from "@/app/defineStyle";

const theme = extendTheme({
    components: {
        heading: `'EB Garamond', serif`,
        fonts: {
            heading: `'EB Garamond', serif`,
            body: `'EB Garamond', serif`,
        },
        Button,
        Divider: {
            border: '1px solid black',
            color: 'black',
            backgroundColor: 'black',

        },
        Radio: {
            baseStyle: {
                control: {
                    _checked: {
                        bg: "black", // Ensures the radio fill is black
                        borderColor: "black",
                        border: '1px solid',
                        backgroundColor: "black",
                        _hover: {
                            bg: "black",
                            borderColor: "black",
                        },
                        _before: {
                            width: 0
                        },

                    },

                },
                label: {
                    marginLeft: 2, // Add some space between the radio and the label
                    fontFamily: "Varta", // Match the font with your theme
                    fontSize: "md", // Adjust as needed
                    marginTop: 1
                },
            },
        },
    },
});

export default theme;
