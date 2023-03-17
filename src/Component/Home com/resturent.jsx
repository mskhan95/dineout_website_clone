



import { Grid,Flex,Box, Image, Heading, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import {useState,useEffect} from "react";
function Card() {
  const maxWidth = useBreakpointValue({ base: "100%", md: "sm" });
  const [state,setState]=useState([])
   useEffect(()=>{
    getresturantdata()
   },[])
   
   function getresturantdata(){
    fetch(
      `https://wild-rose-cape-buffalo-kit.cyclic.app/restaurants`
    )
      .then((res) => res.json())
      .then((data) => setState(data.slice(0, 4)))
      .catch((err) => console.log(err));
  }
console.log(state);

   

  return (


    <Box pt='60px'>
        <Flex justifyContent= "space-between" marginRight='100px'>
       <Heading textAlign='left' marginLeft='100px' size='md'  marginBottom='10px' >
         Restaurants Near You</Heading>
        <Text>See All</Text>
      </Flex>
      
      <Grid templateColumns='repeat(4, 1fr)'  gap={6} paddingLeft='100px'
       paddingRight='100px'>

       {state.map((ele)=>{
        return(
          <Box
      maxWidth={maxWidth}
      w='100%'
      height="210px"
      border="1px solid gray"
      borderRadius="md"
      overflow="hidden"
      transition="box-shadow 0.3s"
      _hover={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)" }}
    >
      <Image
        src={ele.image}
        width="100%"
        height="auto"
        objectFit="cover"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.1)" }}
      />
      <Box padding={4}>
        <Heading as="h2" size="md" textAlign='left'> {ele.resName}</Heading>
        <Flex justifyContent= "space-between">
        <Text fontSize='sm'textAlign='left'> {ele.address}</Text>
        {/* <Text fontSize='sm'textAlign='right'bg='#8cbb0f' p='4px' color='white' > 4.2</Text> */}
        <Box fontSize='sm'textAlign='right'bg='#8cbb0f' p='4px 8px' color='white' borderRadius="md" m='-6px' >{ele.rating}</Box>
       
        </Flex>
       
      </Box>

    </Box>

        )
       })


       }


         </Grid>

    </Box>

)
}
export default Card;
