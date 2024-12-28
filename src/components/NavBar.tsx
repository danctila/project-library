import {
  Flex,
  HStack,
  Box,
  Image,
  Link,
  Text,
  keyframes,
} from "@chakra-ui/react";
import mySelfie from "../assets/selfie.webp";

// Keyframes for the blob's morphing shape.
const blobKeyframes = keyframes`
  0%, 100% {
    border-radius: 28% 72% 22% 78% / 39% 23% 77% 61%;
  }
  50% {
    border-radius: 72% 28% 50% 50% / 55% 26% 74% 45%;
  }
`;

// Keyframes for the main spin (clockwise)
const spinKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

// Keyframes for the *inverse* spin (counter-clockwise)
const inverseSpinKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-359deg);
  }
`;

// Morph + spin for the outer Box
const blobAnimation = `${blobKeyframes} 10s linear infinite, ${spinKeyframes} 100s linear infinite`;

// Inverse spin for the inner Box
const inverseSpin = `${inverseSpinKeyframes} 100s linear infinite`;

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollProjects = () => {
  window.scrollTo({ top: 900, behavior: "smooth" });
};

const NavBar = () => {
  return (
    <Flex
      backgroundColor="#fff"
      height="80px"
      position="fixed"
      width="100%"
      zIndex={200}
      justifyContent="space-between"
    >
      <HStack ml="50px" spacing={5}>
        <Box
          w="60px"
          h="60px"
          position="relative"
          marginLeft="20px"
          bg="#6E07F3"
          overflow="hidden"
          willChange="border-radius, transform"
          borderRadius="28% 72% 22% 78% / 39% 23% 77% 61%"
          animation={blobAnimation}
          transformOrigin="center center"
        >
          {/* Rotates in the opposite direction to cancel out the container's spin */}
          <Box
            w="full"
            h="full"
            animation={inverseSpin}
            transformOrigin="center center"
          >
            <Image src={mySelfie} alt="Me" w="60px" objectFit="cover" />
          </Box>
        </Box>
        {/* HEY, I'M DYLAN ANCTIL */}
        <Text
          fontWeight={700}
          fontSize={{
            base: "25px",
            sm: "25px",
            md: "20px",
            lg: "20px",
            xl: "20px",
            "2xl": "20px",
          }}
          letterSpacing="2px"
          color="black"
        >
          DYLAN ANCTIL
        </Text>
      </HStack>
      <HStack
        spacing="50px"
        mr="70px"
        fontSize={{
          base: "25px",
          sm: "25px",
          md: "20px",
          lg: "20px",
          xl: "20px",
          "2xl": "20px",
        }}
      >
        <Link fontWeight="semibold" onClick={() => scrollTop()}>
          HOME
        </Link>
        <Link fontWeight="semibold" onClick={() => scrollProjects()}>
          PROJECTS
        </Link>
        <Link
          fontWeight="semibold"
          onClick={() => (window.location.href = "mailto:danctila@gmail.com")}
        >
          CONTACT
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
