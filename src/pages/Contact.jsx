'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Textarea,
  VStack,
  useColorModeValue,
  useToast,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'All fields are required.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: 'Success',
      description: 'Your message has been sent!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxW='lg' centerContent>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Box w='100%' p={6} boxShadow='md' borderRadius='md' bg={useColorModeValue('gray.50', 'gray.800')}>
          <Heading size='lg' mb={4} textAlign='center'>Contact Us</Heading>
          <Text textAlign='center' mb={4}>Have any questions? Feel free to reach out via email or by using the form below.</Text>
          <VStack spacing={4} align='stretch'>
            <Input
              type='text'
              placeholder='Your Name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              bg={useColorModeValue('white', 'gray.700')}
              focusBorderColor='green.500'
            />
            <Input
              type='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              bg={useColorModeValue('white', 'gray.700')}
              focusBorderColor='green.500'
            />
            <Textarea
              placeholder='Your Message'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              bg={useColorModeValue('white', 'gray.700')}
              focusBorderColor='green.500'
            />
            <Button colorScheme='green' onClick={handleSubmit} w='full'>Send Message</Button>
          </VStack>
        </Box>
        <Text textAlign='center' mt={4} color={useColorModeValue('gray.600', 'gray.300')}>
          Or email us at: <b>contact@aisustainablefarming.com</b>
        </Text>
      </motion.div>
    </Container>
  );
};

export default Contact;
