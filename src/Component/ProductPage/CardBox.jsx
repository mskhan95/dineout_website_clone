import React from "react";
import { Card, CardBody, Image, Heading, Flex } from "@chakra-ui/react";

function CardBox({ ele }) {
  return (
    <div key={ele.id}>
      <Card maxW='sm' borderRadius="5px" h="400px" w="90%">
        <CardBody p="0px">
          <img src={ele.image} alt="alt" h="50%"/>
          <Heading size='sm' style={{}}>{ele.resName}</Heading>
          <Flex><p>{ele.address}</p>-<p>{ele.location}</p></Flex>
          <Flex><p>{ele.price}</p></Flex>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardBox;
