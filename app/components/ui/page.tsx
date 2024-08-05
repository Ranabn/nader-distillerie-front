// BtnPage.js
import {Flex, Text} from '@chakra-ui/react';
import {Btn} from '@/app/components/ui/Btn';
import {Navbar} from "@/app/components/navigation/navbar";

const BtnPage = () => {
    return (
        <Flex width={'100vw'} justifyContent="center" alignItems="center" gap={4} flexDir='column'>
            <Navbar/>
            <Flex gap={4}>
                <Btn variant="primaryBlack" text="work together"/>
                <Btn variant="primaryWhite" text="work together"/>
            </Flex>
            <Btn variant="secondary" text="work together"/>
            <Btn variant="tertiary" text="Work together"/>
        </Flex>
    );
};

export default BtnPage;
