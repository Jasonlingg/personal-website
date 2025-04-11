import React from "react";
import {
    Box,
    Text,
    Heading,
    Flex,
    Container,
    SimpleGrid,
    Avatar,
    VStack,
    Divider,
    useColorModeValue,
    Grid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
    FaReact, FaHtml5, FaCss3Alt, FaJava, FaGithub, FaPython, FaNode, FaDocker, FaAws,
} from "react-icons/fa";
import {
    SiTypescript, SiJavascript, SiTailwindcss, SiSpringboot, SiNextdotjs, SiFlask,
    SiDjango, SiPostgresql, SiJira, SiConfluence, SiPostman, SiGooglecloud, SiVuedotjs,
    SiReact, SiChakraui, SiMysql,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import meteor from "../animations/header.json";
import Lottie from "lottie-react";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const categoryDescriptions: Record<string, string> = {
    frontend: "These are the essential frameworks, libraries, and tools I use to build interactive and user-friendly web interfaces.",
    backend: "These tools and technologies power my server-side logic, APIs, and database interactions for scalable applications.",
    languages: "The programming languages I use to develop software solutions across different domains and platforms.",
    tools: "A collection of essential utilities and platforms that streamline my development workflow and improve efficiency.",
};

const skills = {
    languages: [
        { icon: FaJava, name: "Java", color: "#007396" },
        { icon: TbBrandCpp, name: "C++", color: "#00599C" },
        { icon: FaPython, name: "Python", color: "#306998" },
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: FaHtml5, name: "HTML", color: "#E34F26" },
        { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
        { icon: SiMysql, name: "MySQL", color: "#4479A1" },

    ],
    frontend: [
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: SiVuedotjs, name: "Vue.js", color: "#42B883" },
        { icon: SiReact, name: "React Native", color: "#61DAFB" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
        { icon: SiChakraui, name: "Chakra UI", color: "#319795" },
    ],
    backend: [
        { icon: SiFlask, name: "Flask", color: "#000000" },
        { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
        { icon: FaNode, name: "Node.js", color: "#339933" },
        { icon: SiDjango, name: "Django", color: "#092E20" },
        { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
        { icon: FaJava, name: "Java EE", color: "#007396" },
    ],
    tools: [
        { icon: FaGithub, name: "GitHub", color: "#181717" },
        { icon: SiJira, name: "Jira", color: "#0052CC" },
        { icon: SiConfluence, name: "Confluence", color: "#172B4D" },
        { icon: SiPostman, name: "Postman", color: "#FF6C37" },
        { icon: FaDocker, name: "Docker", color: "#2496ED" },
        { icon: FaAws, name: "AWS", color: "#FF9900" },
        { icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
    ],
};

const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const AboutSkills = () => {
    return (
        <Box bg="rgb(217, 223, 230)"
            minH="100vh" py={10} display="flex" justifyContent="center">

            {/* White container */}
            <Container
                maxW="6xl"
                bg="rgb(217, 223, 230)"
                // borderRadius="lg"
                // boxShadow="2xl"
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={containerVariant}
                zIndex={2}
            >
                {/* About Me Section */}
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="center"
                    px={4}
                    gap="80px"
                >
                    {/* Left Side - Lottie Animation
                    <Box flex="1" maxW="300px" ml="-60px">
                        <Lottie animationData={meteor} loop autoPlay />
                    </Box> */}

                    {/* Right Side - About Me Content */}
                    <VStack spacing={5} textAlign="center" flex="2">
                        <Heading size="lg" fontWeight="bold" color="gray.600">
                            A Bit About Me                  </Heading>

                        <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                            <Text fontSize="lg" fontWeight="medium" textAlign="center">
                                Hey there &#128075;, my name is Jason Ling! I have experience in both <Text as="span" fontWeight="bold">fullstack development</Text>, as well as <Text as="span" fontWeight="bold">mobile app development</Text>, working with modern frameworks like React TypeScript, Spring Boot, Django, and React Native.
                                On the frontend, I focus on crafting <Text as="span" fontWeight="bold">responsive, accessible, and visually engaging</Text> user interfaces that enhance user interaction.
                                On the backend, I specialize in building <Text as="span" fontWeight="bold">scalable APIs, optimizing database performance,</Text> and extremely passionate about <Text as="span" fontWeight="bold">AI and Machine Learning</Text>.
                            </Text>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                            <Text fontSize="lg" fontWeight="medium" textAlign="center">
                                Outside of coding, I enjoy <Text as="span" fontWeight="bold">playing badminton</Text>—a sport that sharpens both my reflexes and strategic thinking.
                                When I’m not on the court, you’ll often find me catching up on school, learning new cooking recipes, or watching sports on TV.
                                I’m <Text as="span" fontWeight="bold">confident, naturally curious,</Text> and always striving to refine and learn new skills. 
                            </Text>
                        </motion.div>
                    </VStack>
                </Flex>

                <VStack spacing={10} textAlign="center" flex="2" px={6} w="full">

                    <motion.div initial="hidden" animate="visible" variants={fadeInVariant} />

                    <VStack spacing={8} align="start" w="full">
                        {Object.entries(skills).map(([category, items]) => (
                            <MotionBox
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                w="full"
                            >
                                <Heading size="md" color="gray.600" mb={2}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Heading>
                                <Text color="gray.500" mb={4} fontSize="sm">
                                    {/* Customize this text for each category */}
                                    {categoryDescriptions[category] || "A set of technologies I use in my work."}
                                </Text>
                                <Grid
                                    templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
                                    gap={4}
                                    w="full"
                                >
                                    {items.map(({ icon: Icon, name, color }) => (
                                        <MotionBox
                                            key={name}
                                            p={4}
                                            borderRadius="xl"
                                            bg="gray.50"
                                            boxShadow="lg"
                                            whileHover={{ scale: 1.05, boxShadow: "xl" }}
                                            whileTap={{ scale: 0.95 }}
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            flexDir="column"
                                            textAlign="center"
                                        >
                                            <Icon size="32px" color={color} />
                                            <Text mt={2} fontWeight="semibold" color="gray.800">
                                                {name}
                                            </Text>
                                        </MotionBox>
                                    ))}
                                </Grid>
                            </MotionBox>
                        ))}
                    </VStack>
                </VStack>




            </Container>
        </Box >
    );
};

export default AboutSkills;
