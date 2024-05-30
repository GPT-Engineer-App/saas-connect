import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to SaaSify
          </Heading>
          <Text fontSize="xl" color="gray.600">
            The ultimate solution to streamline your business operations.
          </Text>
          <HStack justify="center" mt={6}>
            <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
              Get Started
            </Button>
            <Button variant="outline" colorScheme="teal" size="lg">
              Learn More
            </Button>
          </HStack>
        </Box>

        {/* Features Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Features
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack spacing={4} align="center">
              <IconButton aria-label="Feature 1" icon={<FaCheckCircle />} size="lg" isRound colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 1
              </Text>
              <Text textAlign="center" color="gray.600">
                Description of feature 1 that highlights its benefits and advantages.
              </Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="Feature 2" icon={<FaCheckCircle />} size="lg" isRound colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 2
              </Text>
              <Text textAlign="center" color="gray.600">
                Description of feature 2 that highlights its benefits and advantages.
              </Text>
            </VStack>
            <VStack spacing={4} align="center">
              <IconButton aria-label="Feature 3" icon={<FaCheckCircle />} size="lg" isRound colorScheme="teal" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 3
              </Text>
              <Text textAlign="center" color="gray.600">
                Description of feature 3 that highlights its benefits and advantages.
              </Text>
            </VStack>
          </HStack>
        </Box>

        {/* Testimonials Section */}
        <Box py={10} bg="gray.50">
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            What Our Customers Say
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack spacing={4} align="center">
              <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1474899420076-a61e74989430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMDF8ZW58MHx8fHwxNzE3MDUwNDM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 1" />
              <Text fontSize="lg" fontWeight="bold">
                Customer 1
              </Text>
              <Text textAlign="center" color="gray.600">
                "SaaSify has transformed our business operations and increased our efficiency by 50%!"
              </Text>
            </VStack>
            <VStack spacing={4} align="center">
              <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMDJ8ZW58MHx8fHwxNzE3MDUwNDM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 2" />
              <Text fontSize="lg" fontWeight="bold">
                Customer 2
              </Text>
              <Text textAlign="center" color="gray.600">
                "The best investment we've made in our company's growth. Highly recommend SaaSify!"
              </Text>
            </VStack>
            <VStack spacing={4} align="center">
              <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMDN8ZW58MHx8fHwxNzE3MDUwNDQwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 3" />
              <Text fontSize="lg" fontWeight="bold">
                Customer 3
              </Text>
              <Text textAlign="center" color="gray.600">
                "Exceptional service and support. SaaSify is a game-changer for our industry."
              </Text>
            </VStack>
          </HStack>
        </Box>

        {/* Call to Action Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Ready to Transform Your Business?
          </Heading>
          <Text fontSize="xl" color="gray.600" mb={6}>
            Join thousands of satisfied customers who are using SaaSify to enhance their business operations.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
