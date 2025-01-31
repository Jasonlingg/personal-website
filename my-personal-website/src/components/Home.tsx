import React from "react";
import {
    Box,
    VStack,
    Heading,
    Text,
    HStack,
    Link,
    Flex,
    Icon,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationData from "../animations/homepage.json";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Typewriter from "react-typewriter-effect";

const Home: React.FC = () => {
    return (
        <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.50"
            px={4}
        >
            <VStack gap={8} textAlign="center">
                {/* Animation */}
                <Box
                    animation="pulse 5s infinite"
                    style={{ width: "100%", maxWidth: "400px" }}
                >
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
                    fontWeight="extrabold"
                    textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
                    _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
                >
                    <Text as="span">Hi, I'm</Text>
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
                            cursorColor="blue"
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

                {/* Links Section */}
                <HStack gap={6} mt={{ base: 2, md: 0 }}>
                    <Link
                        href="https://www.linkedin.com/in/jason-lingg/"
                        aria-label="LinkedIn"
                        _hover={{ transform: "scale(1.2)", transition: "0.3s ease-in-out" }}
                    >
                        <Icon as={FaLinkedin} boxSize={10} color="gray.400" _hover={{ color: "blue.400" }} />
                    </Link>
                    <Link
                        href="https://github.com/your-username"
                        aria-label="GitHub"
                        _hover={{ transform: "scale(1.2)", transition: "0.3s ease-in-out" }}
                    >
                        <Icon as={FaGithub} boxSize={10} color="gray.400" _hover={{ color: "blue.400" }} />
                    </Link>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Home;
