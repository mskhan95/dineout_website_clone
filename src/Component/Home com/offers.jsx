import {Box,Grid,Card,CardBody,Heading,Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function BestOffers(){

    const navi = useNavigate()

    function HandleClick(){
        navi('/restaurent')
    }

    return(
    <Box pb='60px' bg='#f3f3f3'>
        <Heading textAlign='left' marginLeft='100px' size='md'  marginBottom='10px' >Best Offers</Heading>
        
        <Grid  templateColumns={{
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  }}
   gap={6} paddingLeft='100px' marginRight='47%'>
        
        <Card maxW='sm' >
         <CardBody >
          <Image w='100%' onClick={HandleClick}
           src='https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
           </CardBody>
          </Card>

          <Card maxW='sm'>
         <CardBody>
          <Image w='100%' onClick={HandleClick}
           src='https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
           </CardBody>
          </Card>
           
          <Card maxW='sm'>
         <CardBody >
          <Image w='100%' onClick={HandleClick}
           src='https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
           </CardBody>
          </Card>

          <Card maxW='sm'>
         <CardBody>
          <Image onClick={HandleClick}
           src='https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/15offid.png?tr=tr:n-small'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
           </CardBody>
          </Card>
</Grid>
    </Box>
    )
}

export default BestOffers;