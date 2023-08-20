import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  text: string;
  image: string;
}

const FeaturedItem = ({ title, image }: Props) => {
  return (
    <>
      <Card
        marginTop="50px"
        width="370px"
        borderRadius={12}
        overflow="hidden"
        variant={"outline"}
      >
        <Image src={image} height="270px" objectFit={"cover"}></Image>
        <CardBody padding="none">
          <HStack
            justifyContent="center"
            borderTop="1px"
            outline="black"
            marginBottom={"20px"}
          >
            <Text fontWeight={500} fontSize={18} marginTop={"10px"}>
              {title}
            </Text>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default FeaturedItem;
