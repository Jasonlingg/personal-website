import React from "react";
import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import educationAnimation from "../animations/education.json";

// Animation Variants
const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const Education: React.FC = () => {
    return (
        <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
            <Box
                bg="gray.100"
                p={8}
                borderRadius="lg"
                shadow="md"
                textAlign="center"
                maxW="lg"
                mx="auto"
            >
                <Heading fontSize="2xl" mb={4} color="blue.600">
                    Education
                </Heading>

                <Lottie
                    animationData={educationAnimation}
                    style={{ width: 200, height: 200, margin: "auto" }}
                />

                <Text fontSize="xl" fontWeight="bold" mt={4} color="gray.700">
                    University of Waterloo
                </Text>

                <Text fontSize="md" color="gray.600">
                    Systems Design Engineering | Candidate for Bachelor of Applied Science
                </Text>
            </Box>
        </motion.div>
    );
};

export default Education;
