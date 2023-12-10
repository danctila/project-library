import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";

interface Props {
  video: string;
  title: string;
  description: string;
  tools: string[];
  gitHub?: string;
}

const Project = ({ video, title, description, tools, gitHub }: Props) => {
  return (
    <>
      <Card variant="unstyled" width="900px" background={"#DCDCDC"}>
        <CardBody>
          <AspectRatio
            maxW="900px"
            ratio={16 / 9}
            shadow="6px 8px 6px -1px rgba(0, 0, 0, 0.25)"
          >
            <iframe src={video} />
          </AspectRatio>
          <Text
            mb="15px"
            mt="15px"
            fontSize="48px"
            fontWeight={600}
            letterSpacing="2.5px"
            color="#6E07F3"
          >
            {title}
          </Text>
          <Text
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "2xl",
              lg: "2xl",
              xl: "2xl",
              "2xl": "2xl",
            }}
            mb="15px"
          >
            {description}
          </Text>

          <HStack>
            <Text fontSize="4xl">Tools:</Text>
            {tools.map((tool) => (
              <Box
                key={tool}
                bgGradient="linear(180deg, #B68AEE 0%, #6E07F3 100%, #A078D3 100%)"
                borderRadius="34px"
                padding="4px"
                paddingRight="10px"
                paddingLeft="10px"
                mr="30px"
                ml="20px"
                color="white"
                fontSize="19px"
                fontWeight="500"
              >
                {tool}
              </Box>
            ))}
          </HStack>

          {gitHub && (
            <HStack>
              <Text fontSize="4xl">GitHub:</Text>
              <Link
                color="blue"
                fontSize="25px"
                fontWeight="300"
                href={gitHub}
                mt="8px"
              >
                {gitHub}
              </Link>
            </HStack>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default Project;
