import * as React from 'react';
import {
  Container,
  Box,
  Text,
  Flex,
  Spacer,
  Heading,
  Menu,
  MenuItem,
  MenuDivider,
  MenuButton,
  IconButton,
  MenuList,
  HStack,
  Button,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { MdAdd } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode(); // Dark mode toggle

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Flex align="center">
        <HStack>
          <Link to="/">
            <Box p="2">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', sm: '3xl' }}
                  bgGradient="linear(to-l, rgb(79, 250, 142), #FF0080)"
                  bgClip="text"
                  _hover={{
                    textDecoration: 'none',
                    bgGradient: 'linear(to-r, green.500, yellow.500)'
                  }}
                >
                  AI Sustainable Farming
                </Heading>
              </motion.div>
            </Box>
          </Link>
        </HStack>
        <Spacer />

        {/* Desktop Buttons */}
        <HStack display={{ base: "none", md: "flex" }}>
          <Button as={Link} to="/farmer-upload" leftIcon={<MdAdd />} colorScheme="pink">
            Upload Farmer Data
          </Button>
          <Button as={Link} to="/market-upload" leftIcon={<MdAdd />} colorScheme="purple">
            Upload Market Data
          </Button>
          <Button as={Link} to="/getadvice" leftIcon={<LuLayoutDashboard />} colorScheme="blue">
            AI Advice
          </Button>
          {/* Dark Mode Toggle Button */}
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            colorScheme="gray"
          />
        </HStack>

        {/* Mobile Menu */}
        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              size="md"
              bg={useColorModeValue("gray.200", "gray.800")}
            />
            <MenuList>
              <MenuItem icon={<MdAdd />} onClick={() => navigate("/farmer-upload")}>
                Upload Farmer Data
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<MdAdd />} onClick={() => navigate("/market-upload")}>
                Upload Market Data
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<LuLayoutDashboard />} onClick={() => navigate("/getadvice")}>
                AI Advice
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} onClick={toggleColorMode}>
                {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
