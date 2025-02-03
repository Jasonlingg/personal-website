import React, { useEffect, useState } from "react";
import { Box, VStack, Text, Flex } from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationData from "../animations/homepage.json"; // Your main animation data
import background from "../animations/background.json"; // Your background animation
import Typewriter from "react-typewriter-effect";
import Footer from "./Footer";

const Home: React.FC = () => {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [showBackground, setShowBackground] = useState(window.innerWidth > 768); // Hide background on small screens

    useEffect(() => {
        const handleResize = () => {
            const newSize = { width: window.innerWidth, height: window.innerHeight };
            setWindowSize(newSize);
            setShowBackground(newSize.width > 768); // Show only if width is greater than 768px
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"  // Ensures full-height layout, including footer
            position="relative"
            overflow="hidden" // Prevent scrolling beyond the viewport
        >
            {/* Lottie Animation as Background */}
            {showBackground && (
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100vw"
                    height="100vh"
                    zIndex="-1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Lottie
                        animationData={background}
                        loop
                        autoplay
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", // Ensures it covers the whole screen
                            objectPosition: "center",
                            transform: "scale(1.5)", // Zoom in to cover the entire background
                            opacity: 0.3, // Adjust this value to control the opacity

                        }}
                    />
                </Box>
            )}




            {/* Main Content */}
            <VStack
                gap={8}
                textAlign="center"
                zIndex="1"
                flex="1"
                justifyContent="center"
                padding={{ base: 4, md: 8 }} // Add padding to avoid content touching edges on mobile
            >
                {/* Animation */}
                <Box animation="pulse 5s infinite" style={{ width: "100%", maxWidth: "400px" }}>
                    <Lottie animationData={animationData} loop autoplay />
                </Box>

                {/* Hero Section */}
                <Flex
                    as="h1"
                    justifyContent="center"
                    alignItems="center"
                    wrap="nowrap"
                    gap={2}
                    fontSize={{ base: "3xl", md: "5xl" }}
                    fontWeight="bold"
                    textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
                    _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
                >
                    <Text as="span" color="gray.600"
                    >Hi, I'm</Text>
                    <Text
                        as="span"
                        color="blue.400"
                        display="inline"
                        _hover={{ color: "blue.500", transition: "color 0.3s" }}
                    >
                        <Typewriter
                            textStyle={{
                                fontSize: "inherit",
                                fontWeight: "inherit",
                                color: "inherit",
                            }}
                            startDelay={100}
                            cursorColor="gray"
                            multiText={[
                                "Jason.",
                                "an aspiring engineer.",
                                "a change-maker.",
                                "a problem-solver.",
                            ]}
                            multiTextDelay={2000}
                            typeSpeed={100}
                            deleteSpeed={50}
                            multiTextLoop
                        />
                    </Text>
                </Flex>

                {/* Supporting Text */}
                <Text
                    fontSize="lg"
                    color="gray.600"
                    maxW="600px"
                    _hover={{ transform: "scale(1.02)", transition: "transform 0.3s" }}
                >
                    Welcome to my personal homepage! I am a passionate developer focused
                    on creating intuitive and impactful digital experiences. Explore my
                    projects, skills, and more!
                </Text>
            </VStack>

            <Footer />
        </Box>
    );
};

export default Home;
