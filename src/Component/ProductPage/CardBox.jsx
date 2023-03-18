import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Heading, Flex, Box, Spacer, Text } from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons'


function CardBox({ ele }) {
  return (
    <div key={ele.id}>
      
      <Card maxW='sm' borderRadius="5px" h="400px" w="100%" marginRight="-90px">
        <CardBody p="0px">
          <img src={ele.image} borderRadius="5px" alt="alt" h="175px"/>


          <Flex h="15%" p="10px" textAlign="center">
          <Heading marginLeft="-10px" size='sm' p="10px" style={{textAlign:"left"}}>{ele.resName}</Heading>

          <Spacer/>

          <Box marginTop="5%"
          paddingLeft={"5px"}
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
          borderRadius={"2px"}
          bg={"#b3ca42"}
          color={"white"}
          fontWeight={"bold"}
          fontSize="12px"
          pr={"5px"}
        >
          {ele.rating}{" "}
          <StarIcon marginTop={"-3px"} color={"white"} fontSize="10px" />
        </Box>

          </Flex>
          
          <div style={{textAlign:"left",padding:"10px"}} >
          <Flex  color="#8f8f8f" fontSize="12px"><p>{ele.address}</p>-<p>{ele.location}</p></Flex>
          <Flex  color="#8f8f8f" fontSize="12px"><p>₹ {ele.price} for 2(approx) | {ele.category[0]} ,{ele.category[1]} ,{ele.category[2]}</p></Flex>
          </div>

        <Flex bg={"white"}>
        <Box bg={"white"}>
          <Text
            w="100px"
            h="20px"
            // bg="#fff4f4"
            color={"red.500"}
            fontWeight="400"
            borderRadius={"5px"}
            fontSize="12px"
            bg={"white"}
          >{
            ele.Dineout_Pay ?  "Dineout Pay"  : ""
          }
          </Text>
        </Box>
        </Flex>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardBox;
