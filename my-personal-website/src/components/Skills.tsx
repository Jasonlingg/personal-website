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
                maxW="5xl"
                bg="rgb(217, 223, 230)" p={8}
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
                    py={16}

                    gap="80px"
                >
                    {/* Left Side - Lottie Animation */}
                    <Box flex="1" maxW="300px" ml="-60px">
                        <Lottie animationData={meteor} loop autoPlay />
                    </Box>

                    {/* Right Side - About Me Content */}
                    <VStack spacing={5} textAlign="center" flex="2">
                        <Heading size="lg" fontWeight="bold" color="gray.600">
                            A bit about me—who I am and what I do.                    </Heading>

                        <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                            <Text fontSize="lg" fontWeight="medium" textAlign="left">
                                Hey there &#128075;, my name is Jason Ling! I have experience in both <Text as="span" fontWeight="bold">frontend and backend development</Text>, as well as <Text as="span" fontWeight="bold">mobile app development</Text>, working with modern frameworks like React TypeScript, Spring Boot, Django, and React Native.
                                On the frontend, I focus on crafting <Text as="span" fontWeight="bold">responsive, accessible, and visually engaging</Text> user interfaces that enhance user interaction.
                                On the backend, I specialize in building <Text as="span" fontWeight="bold">scalable APIs, optimizing database performance,</Text> and implementing <Text as="span" fontWeight="bold">secure authentication systems</Text> to support complex applications.
                            </Text>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
                            <Text fontSize="lg" fontWeight="medium" textAlign="left">
                                Outside of coding, I enjoy <Text as="span" fontWeight="bold">playing badminton</Text>—a sport that sharpens both my reflexes and strategic thinking.
                                When I’m not on the court, you’ll often find me catching up on school, learning new cooking recipes, or watching sports on TV.
                                I’m <Text as="span" fontWeight="bold">confident, naturally curious,</Text> and always striving to refine my skills.
                            </Text>
                        </motion.div>
                    </VStack>
                </Flex>

                <Divider my={8} color="blue.500"></Divider>

                {/* Skills Section */}
                <Heading size="lg" textAlign="center" mb={6} color="gray.800">
                    My Skills
                </Heading>

                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
                    {Object.entries(skills).map(([category, items]) => (
                        <Box key={category}>
                            <Heading size="md" color="gray.700" mb={4}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Heading>
                            <Flex wrap="wrap" gap={4}>
                                {items.map(({ icon: Icon, name, color }) => (
                                    <MotionBox
                                        key={name}
                                        p={3}
                                        borderRadius="md"
                                        bg="gray.100"
                                        boxShadow="md"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        variants={itemVariant}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Icon size="30px" color={color} />
                                        <Text ml={2} fontWeight="bold" color="gray.800">
                                            {name}
                                        </Text>
                                    </MotionBox>
                                ))}
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box >
    );
};

export default AboutSkills;
