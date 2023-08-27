import { Box, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import gitLogo from "../assets/gitHubIcon.png";
import emailIcon from "../assets/emailIcon.png";
import reactLogo from "../assets/React-Symbol.png";

const Footer = () => {
  return (
    <>
      <Box bg="#6E07F3" w="100%" h="500px">
        <VStack pt="80px">
          <Text
            fontWeight={600}
            fontSize="36px"
            letterSpacing="5px"
            color="white"
          >
            DYLAN ANCTIL
          </Text>
          <Text fontWeight={300} fontSize="24px" color="white">
            Coding my way through possibilities, one project at a time.
          </Text>
        </VStack>
        <HStack spacing="50px" justify="center" pt="50px" pb="70px">
          <Link href="https://github.com/danctila">
            <Image
              boxSize={{ base: "70px", md: "40px" }}
              src={gitLogo}
              alt="github logo"
            />
          </Link>
          <Link
            onClick={() => (window.location.href = "mailto:danctila@gmail.com")}
          >
            <Image
              boxSize={{ base: "70px", md: "40px" }}
              src={emailIcon}
              alt="danctila@gmail.com"
            />
          </Link>
        </HStack>
        <Text
          fontWeight={500}
          fontSize={{
            base: "20px",
            sm: "20px",
            md: "20px",
            lg: "15px",
            xl: "15px",
            "2xl": "15px",
          }}
          color="white"
          align="center"
          pb="10px"
        >
          Handcrafted by Dylan Anctil
        </Text>
        <HStack justify="center">
          <Text
            fontWeight={300}
            fontSize={{
              base: "15px",
              sm: "15px",
              md: "15px",
              lg: "11px",
              xl: "11px",
              "2xl": "11px",
            }}
            color="white"
          >
            Made with
          </Text>
          <Image h="35px" w="70px" src={reactLogo} />
        </HStack>
      </Box>
    </>
  );
};

export default Footer;
