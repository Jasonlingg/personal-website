import React, { useEffect } from "react";
import { Box, VStack, Text, Flex, Link, HStack } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../animations/homepage.json";
import bottom from "../animations/bottom.json";
import arrow from "../animations/arrow.json";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaBlog } from "react-icons/fa";
import Typewriter from "react-typewriter-effect";
// Motion Animations
const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const bounceAnimation = {
    animate: {
        y: [0, 15, 0],
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
};

const Home: React.FC = () => {
    useEffect(() => {
        document.body.style.overflowX = "hidden"; // Prevent horizontal scroll issues
    }, []);

    return (
        <Box position="relative" minHeight="100vh" bg="blue.500" color="white">
            {/* Social Media Icons */}
            <HStack justifyContent="center" spacing={6} pt={4}>
                <Link
                    href="https://github.com/Jasonlingg"
                    isExternal
                    _hover={{ transform: "scale(1.2)" }}
                >
                    <FaGithub size={24} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/jason-lingg/"
                    isExternal
                    _hover={{ transform: "scale(1.2)" }}
                >
                    <FaLinkedin size={24} />
                </Link>
            </HStack>

            {/* Main Content */}
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="center"
                minHeight="80vh"
                px={20}
                textAlign={{ base: "center", md: "left" }}
            >
                {/* Left Side - Text */}
                <VStack align={{ base: "center", md: "flex-start" }} spacing={1} flex={1} maxWidth="700px">
                    <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                        <Flex
                            as="h1"
                            justifyContent="center"
                            alignItems="center"
                            marginTop={{ base: "20px", md: "0" }}
                            fontSize={{ base: "4xl", md: "7xl" }}
                            fontWeight="bold"
                            rowGap={{ base: 0, md: 2 }} // No extra gap in column mode
                            columnGap={{ base: 0, md: 4 }}
                            className="limelight-regular"
                            flexWrap="wrap"  // Allows text to wrap naturally
                            direction={{ base: "column", md: "row" }} // Switch to column when necessary
                            textAlign="center" // Ensures alignment in column mode
                        >
                            <motion.span variants={slideInLeft} initial="hidden" animate="visible">
                                <Text as="span" color="gray.900" >Jason</Text>
                            </motion.span>
                            <motion.span variants={slideInRight} initial="hidden" animate="visible">
                                <Text
                                    as="span"
                                    color="gray.100"
                                    display="inline"
                                >
                                    Ling
                                </Text>
                            </motion.span>
                        </Flex>
                    </motion.div>
                    <Box maxW="600px" >
                        <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                            <Text fontSize="lg" fontWeight="medium">
                                I'm a <Text as="span" fontWeight="bold">Systems Design Engineering</Text> student at the University of Waterloo with a passion for innovation.
                            </Text>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                            <Text fontSize="lg" fontWeight="medium">
                                With experience across <Text as="span" fontWeight="bold">big tech and fast-paced startups</Text>, I love tackling challenges and building a product!
                            </Text>
                        </motion.div>
                    </Box>
                </VStack>

                <motion.div initial="hidden" animate="visible" variants={slideInRight}>
                    <Box width={{ base: "100%", md: "650px" }}>
                        <Lottie animationData={animationData} loop autoplay />
                    </Box>
                </motion.div>
            </Flex>

            {/* Bottom Background Animation */}
            <Box position="absolute" bottom={{ base: "-2%", md: "-3%" }}
                left="0" width="100vw" zIndex="1">
                <Lottie animationData={bottom} loop autoplay />
            </Box>

            {/* Bouncing Arrow Animation */}
            <Box position="absolute" bottom={{ base: "-8%", md: "2%" }} left="50%" transform="translateX(-50%)" zIndex="3">
                <motion.div variants={bounceAnimation} animate="animate">
                    <Lottie animationData={arrow} loop autoplay style={{ width: "100px", height: "100px" }} />
                </motion.div>
            </Box>
        </Box>
    );
};

export default Home;
