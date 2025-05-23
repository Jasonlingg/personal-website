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
    Image,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { keyframes } from "@emotion/react";
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

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const sparkle = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(180deg); opacity: 1; }
  100% { transform: scale(0) rotate(360deg); opacity: 0; }
`;

interface SparkleProps {
    size: number;
    color: string;
    style: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ size, color, style }) => (
    <Box
        position="absolute"
        width={size}
        height={size}
        animation={`${sparkle} 3s ease-in-out infinite`}
        style={style}
    >
        <Box
            width="100%"
            height="100%"
            bg={color}
            borderRadius="50%"
            filter="blur(1px)"
        />
    </Box>
);

const BackgroundSparkles = () => {
    const sparkles = Array.from({ length: 20 }).map((_, i) => ({
        size: Math.random() * 4 + 2,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
        },
    }));

    return (
        <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            overflow="hidden"
            pointerEvents="none"
            zIndex={1}
        >
            {sparkles.map((props, i) => (
                <Sparkle key={i} {...props} />
            ))}
        </Box>
    );
};

const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const categoryDescriptions: Record<string, string> = {
    frontend: "These are the essential frameworks, libraries, and tools I use to build interactive and user-friendly interfaces.",
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8,
            staggerChildren: 0.2,
            ease: "easeOut"
        } 
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const AboutSkills = () => {
    const aboutRef = React.useRef(null);
    const skillsRef = React.useRef(null);
    const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
    const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

    return (
        <Box 
            bg="rgb(217, 223, 230)"
            minH="100vh" 
            py={10} 
            display="flex" 
            justifyContent="center"
            position="relative"
            overflow="hidden"
        >
            <BackgroundSparkles />
            <Box
                position="absolute"
                top="10%"
                left="5%"
                width="300px"
                height="300px"
                bg="blue.100"
                borderRadius="full"
                filter="blur(100px)"
                opacity="0.3"
                animation={`${float} 6s ease-in-out infinite`}
            />
            <Box
                position="absolute"
                bottom="10%"
                right="5%"
                width="400px"
                height="400px"
                bg="purple.100"
                borderRadius="full"
                filter="blur(100px)"
                opacity="0.3"
                animation={`${float} 8s ease-in-out infinite`}
            />

            <Container
                maxW="6xl"
                bg="rgb(217, 223, 230)"
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={containerVariant}
                zIndex={2}
                position="relative"
            >
                <VStack spacing={10} textAlign="center" flex="2" px={6} w="full">
                    <MotionBox
                        ref={aboutRef}
                        bg="rgba(255, 255, 255, 0.9)"
                        borderRadius="2xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                        p={8}
                        w="full"
                        mb={2}
                        variants={itemVariant}
                        initial="hidden"
                        animate={isAboutInView ? "visible" : "hidden"}
                        boxShadow="lg"
                        _hover={{ 
                            boxShadow: "xl",
                            transform: "translateY(-5px)",
                            transition: "all 0.3s ease"
                        }}
                        backdropFilter="blur(10px)"
                    >
                        <motion.div variants={itemVariant}>
                            <Heading 
                                size="xl" 
                                mb={6} 
                                color="gray.700"
                                position="relative"
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "60px",
                                    height: "4px",
                                    bg: "gray.300",
                                    borderRadius: "2px"
                                }}
                            >
                                About Me
                            </Heading>
                        </motion.div>
                        <Flex direction={{ base: "column", md: "row" }} gap={8} align="center">
                            <motion.div variants={itemVariant}>
                                <Image
                                    src="/profilepicture.jpg"
                                    alt="Jason Ling"
                                    borderRadius="full"
                                    boxSize={{ base: "200px", md: "300px" }}
                                    objectFit="cover"
                                    boxShadow="xl"
                                    border="4px solid"
                                    borderColor="white"
                                    transition="transform 0.3s ease"
                                    _hover={{ transform: "scale(1.02)" }}
                                />
                            </motion.div>
                            <VStack align="start" spacing={4} flex={1}>
                                <motion.div variants={itemVariant}>
                                    <Text fontSize="lg" fontWeight="medium" textAlign="left" color="gray.700">
                                        Hey there &#128075;, my name is Jason Ling! I have experience in both <Text as="span" fontWeight="bold">fullstack development</Text>, as well as <Text as="span" fontWeight="bold">mobile app development</Text>, working with modern frameworks like React TypeScript, Spring Boot, Django, and React Native.
                                        On the frontend, I focus on crafting <Text as="span" fontWeight="bold">responsive, accessible, and visually engaging</Text> user interfaces that enhance user interaction.
                                        On the backend, I specialize in building <Text as="span" fontWeight="bold">scalable APIs, optimizing database performance,</Text> and extremely passionate about <Text as="span" fontWeight="bold">AI and Machine Learning</Text>.
                                    </Text>
                                </motion.div>
                                <motion.div variants={itemVariant}>
                                    <Text fontSize="lg" fontWeight="medium" textAlign="left" color="gray.700">
                                        Outside of coding, I enjoy <Text as="span" fontWeight="bold">playing badminton</Text>—a sport that sharpens both my reflexes and strategic thinking.
                                        When I'm not on the court, you'll often find me catching up on school, learning new cooking recipes, or watching sports on TV.
                                        I'm <Text as="span" fontWeight="bold">confident, naturally curious,</Text> and always striving to refine and learn new skills. 
                                    </Text>
                                </motion.div>
                            </VStack>
                        </Flex>
                    </MotionBox>
                    <Box ref={skillsRef}>
                        <motion.div 
                            variants={itemVariant}
                            initial="hidden"
                            animate={isSkillsInView ? "visible" : "hidden"}
                        >
                            <Heading 
                                size="xl" 
                                fontWeight="bold" 
                                color="gray.700" 
                                mb={4}
                                position="relative"
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "60px",
                                    height: "4px",
                                    bg: "gray.300",
                                    borderRadius: "2px"
                                }}
                            >
                                My Technical Skills
                            </Heading>
                        </motion.div>
                        <motion.div 
                            variants={itemVariant}
                            initial="hidden"
                            animate={isSkillsInView ? "visible" : "hidden"}
                        >
                            <Text color="gray.600" fontSize="lg" mb={8}>
                                Here are the core technologies, languages, and tools I use to build modern, scalable, and engaging applications.
                            </Text>
                        </motion.div>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
                            {Object.entries(skills).map(([category, items], index) => (
                                <MotionBox
                                    key={category}
                                    variants={itemVariant}
                                    initial="hidden"
                                    animate={isSkillsInView ? "visible" : "hidden"}
                                    w="full"
                                    bg="rgba(255, 255, 255, 0.9)"
                                    borderRadius="2xl"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                    p={6}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-start"
                                    boxShadow="lg"
                                    _hover={{ 
                                        boxShadow: "xl",
                                        transform: "translateY(-5px)",
                                        transition: "all 0.3s ease"
                                    }}
                                    backdropFilter="blur(10px)"
                                >
                                    <Heading size="md" color="gray.700" mb={2}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </Heading>
                                    <Text color="gray.600" mb={4} fontSize="sm">
                                        {categoryDescriptions[category] || "A set of technologies I use in my work."}
                                    </Text>
                                    <Grid
                                        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
                                        gap={4}
                                        w="full"
                                    >
                                        {items.map(({ icon: Icon, name, color }) => (
                                            <MotionBox
                                                key={name}
                                                p={3}
                                                borderRadius="lg"
                                                bg="gray.50"
                                                boxShadow="md"
                                                whileHover={{ 
                                                    scale: 1.07, 
                                                    boxShadow: "xl"
                                                }}
                                                whileTap={{ scale: 0.97 }}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                flexDir="column"
                                                textAlign="center"
                                            >
                                                <Icon size="32px" color={color} />
                                                <Text mt={2} fontWeight="semibold" color="gray.700" fontSize="sm">
                                                    {name}
                                                </Text>
                                            </MotionBox>
                                        ))}
                                    </Grid>
                                </MotionBox>
                            ))}
                        </SimpleGrid>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default AboutSkills;
