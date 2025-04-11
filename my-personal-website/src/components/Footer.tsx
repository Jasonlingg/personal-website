import React from "react";
import { Box, Flex, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import headerAnimation from "../animations/header.json";
import Lottie from "lottie-react";

const Footer: React.FC = () => {
    return (
        <Box as="footer" bg="gray.50" color="gray.500" py={1} opacity={0.7}>
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between" 
                maxW="container.xl"
                mx="auto"
                px={4}
                gap={4} 
            >
                <Lottie animationData={headerAnimation} style={{ width: 70, height: 70 }} />

                <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
                    © {new Date().getFullYear()} Jason Ling. All rights reserved.
                </Text>

                <HStack spacing={6}>
                    <Link
                        href="https://www.linkedin.com/in/jason-lingg/"
                        aria-label="LinkedIn"
                        isExternal
                        _hover={{ color: "blue.400" }}
                    >
                        <Icon as={FaLinkedin} boxSize={8} />
                    </Link>
                    <Link
                        href="https://github.com/your-username"
                        aria-label="GitHub"
                        isExternal
                        _hover={{ color: "gray.800" }}
                    >
                        <Icon as={FaGithub} boxSize={8} />
                    </Link>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Footer;
