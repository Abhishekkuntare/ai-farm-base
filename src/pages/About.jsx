'use client';

import { Container, Box, Heading, Text, VStack, useColorModeValue, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <Container maxW='3xl' centerContent>
      <Box w='100%' p={8} boxShadow='lg' borderRadius='md' bg={bgColor} textAlign='center'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading size='xl' mb={4} color={textColor}>
            About AI Sustainable Farming
          </Heading>
          <Text fontSize='lg' color={textColor} mb={6}>
            AI Sustainable Farming is an innovative platform dedicated to empowering farmers with AI-driven insights 
            to optimize agricultural practices, increase yield, and promote sustainability. Our mission is to bridge the 
            gap between technology and agriculture, ensuring a greener future.
          </Text>
          <VStack spacing={4}>
            <Text fontSize='md' color={textColor}>
              🚀 AI-powered predictions for better crop management.
            </Text>
            <Text fontSize='md' color={textColor}>
              🌱 Sustainable farming techniques for long-term productivity.
            </Text>
            <Text fontSize='md' color={textColor}>
              📈 Data-driven insights for smart decision-making.
            </Text>
          </VStack>
          <Button mt={6} colorScheme='green' as={Link} to='/'>
            Back to Home
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default AboutPage;