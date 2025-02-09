import { useState } from 'react';
import { Box, Input, Textarea, Button, VStack, FormControl, FormLabel, Heading, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import React from 'react';
import Footer from './Footer';
import Lottie from 'lottie-react';
import bottom from '../animations/bottom.json';
import emailjs from 'emailjs-com';

const MotionBox = motion(Box);

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('All fields are required.');
            setSuccess('');
            return;
        }
        setError('');

        const templateParams = {
            name,
            email,
            message,
        };

        emailjs.send('service_d2fodwn', 'template_0ln7m3i', templateParams, '3tT5z4LBG-D8lzWcv')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                setSuccess('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.error('Failed to send email:', error);
                setError('Failed to send message. Please try again later.');
                setSuccess('');
            });
    };

    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" px={4} bg="blue.500" position="relative" pt={20}
        >


            <MotionBox
                bg="white"
                p={8}
                borderRadius="lg"
                boxShadow="lg"
                maxW="500px"
                w="full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                zIndex={2}
            >
                <Heading size="lg" textAlign="center" mb={4} color="blue.600">
                    Contact Me
                </Heading>
                <Text textAlign="center" mb={6} color="gray.600">
                    Let’s connect! Feel free to reach out via the form below with any inquires and messages.
                </Text>

                <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            focusBorderColor="blue.400"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            focusBorderColor="blue.400"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            focusBorderColor="blue.400"
                        />
                    </FormControl>

                    {error && <Text color="red.500">{error}</Text>}
                    {success && <Text color="green.500">{success}</Text>}

                    <Button colorScheme="blue" type="submit" w="full">
                        Send Message
                    </Button>
                </VStack>
            </MotionBox>
        </Box >
    );
};

export default Contact;
