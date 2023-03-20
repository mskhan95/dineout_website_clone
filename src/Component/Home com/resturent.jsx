import {
  Grid,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../Context";
import { Link } from "react-router-dom";
import CardBox from "../ProductPage/CardBox";
function Card() {
  const { city, setcity } = useContext(MyContext);
  const maxWidth = useBreakpointValue({ base: "100%", md: "sm" });
  const [state, setState] = useState([]);
  useEffect(() => {
    getresturantdata();
  }, []);

  function getresturantdata() {
    fetch(`https://wild-rose-cape-buffalo-kit.cyclic.app/restaurants?City=${city}`)
      .then((res) => res.json())
      .then((data) => setState(data.slice(0, 4)))
      .catch((err) => console.log(err));
  }

  return (
    <Box pt="60px" h="350px">
      <Flex justifyContent="space-between" marginRight="100px">
        <Heading
          textAlign="left"
          marginLeft="100px"
          size="md"
          marginBottom="10px"
        >
          Restaurants Near You
        </Heading>
        <Link to="/restaurent">
          <Text>See All</Text>
        </Link>
      </Flex>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        paddingLeft="100px"
        paddingRight="100px"
      >
        {state.map((ele) => {
          return (
            <Link to={`/restaurent/${ele.id}`}>
              {/* <CardBox ele={ele} /> */}
              <Box
                maxWidth={maxWidth}
                w="100%"
                height="235px"
                // h="250px" w="90%"
                border="1px solid gray"
                borderRadius="md"
                overflow="hidden"
                transition="box-shadow 0.3s"
                _hover={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)" }}
              >
                <Image
                  src={ele.image}
                  width="100%"
                  height="142px"
                  objectFit="cover"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.1)" }}
                />
                <Box padding={4}>
                  <Heading as="h2" size="md" textAlign="left" mb="5px">
                    {" "}
                    {ele.resName}
                  </Heading>
                  <Flex justifyContent="space-between">
                    <Text fontSize="sm" textAlign="left">
                      {" "}
                      {ele.address}
                    </Text>
                    <Box
                      fontSize="sm"
                      textAlign="center"
                      bg="#8cbb0f"
                      p="4px 8px"
                      color="white"
                      borderRadius="md"
                      m="-6px"
                      h="30px"
                      w="40px"
                    >
                      {ele.rating}
                    </Box>
                  </Flex>
                </Box>
              </Box>
              
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
}
export default Card;
