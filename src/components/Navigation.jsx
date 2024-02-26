import React from "react";
import { Box, Flex, Link, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box as="nav" bg="blue.500" color="white" py={3}>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/budgeting" px={2}>
            Budgeting
          </Link>
          <Link as={RouterLink} to="/investments" px={2}>
            Investments
          </Link>
          <Link as={RouterLink} to="/credit-management" px={2}>
            Credit Management
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
