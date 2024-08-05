'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { ProductsSection } from "@/app/components/landing/ProductsSection";
import ServiceSection from "@/app/components/landing/ServicesSection";

export const Test = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    return (
        <Box ref={ref} position="relative" overflow="visible" bg="white">
            <motion.div
                style={{ y }}
                initial={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <ProductsSection />
                <ServiceSection />
            </motion.div>
        </Box>
    );
};