import React from "react";
import { Box, Button, Container, Heading, Image, Stack, Text, useColorModeValue, VStack, Flex, Icon } from "@chakra-ui/react";
import { FaArrowRight, FaChartLine, FaRegCreditCard, FaUserFriends } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack align="center" spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Manage Your Finances,
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              Effortlessly.
            </Text>
          </Heading>
          <Text color={"gray.500"}>Welcome to the simplest way to manage your personal finances. Track your spending, set budgets, and make smarter decisions with your money.</Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }} rightIcon={<FaArrowRight />}>
              Get Started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} leftIcon={<FaChartLine />}>
              Learn More
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Blob w={"150%"} h={"150%"} position={"absolute"} top={"-20%"} left={0} zIndex={-1} color={useColorModeValue("blue.50", "blue.400")} />
          <Box position={"relative"} height={"300px"} rounded={"2xl"} boxShadow={"2xl"} width={"full"} overflow={"hidden"}>
            <Image alt={"Finance application illustration"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src="https://images.unsplash.com/photo-1636953099671-481a72803051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYXBwbGljYXRpb24lMjBpbGx1c3RyYXRpb258ZW58MHx8fHwxNzA4OTU5MDcyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          </Box>
        </Flex>
      </Stack>
      <VStack py={10}>
        <Heading as="h2" size="xl" fontWeight="bold" textAlign="center">
          Features
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} textAlign="center" justify="center" spacing={{ base: 4, lg: 10 }} py={10}>
          {/* Feature 1 */}
          <Feature icon={<FaChartLine />} title={"Real-Time Analytics"} text={"Get up-to-date information on your finances with our real-time analytics and dashboards."} />
          {/* Feature 2 */}
          <Feature icon={<FaRegCreditCard />} title={"Secure Transactions"} text={"Protect your financial data with our bank-level security and encryption standards."} />
          {/* Feature 3 */}
          <Feature icon={<FaUserFriends />} title={"Collaborate with Advisors"} text={"Work with financial advisors to plan and achieve your financial goals more effectively."} />
        </Stack>
      </VStack>
    </Container>
  );
};

// Helper components for the layout
const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"} maxW={"md"} w={"full"}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"blue.500"} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

// Blob SVG for decoration
const Blob = (props) => {
  return (
    <Icon width={"100%"} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M577 110C577 163.771 557.987 215.574 523.5 254C489.013 292.426 440.69 315.82 388 321C258 336-15 224 1 110C17-4 258-81 388-4C440.69 1.18 489.013 24.5736 523.5 63C557.987 101.426 577 153.229 577 207V110Z" fill="currentColor" />
    </Icon>
  );
};

export default Index;
