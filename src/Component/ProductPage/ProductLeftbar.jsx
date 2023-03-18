import React from 'react';
import {Box, VStack,Stack, Input, Checkbox, Flex,Spacer} from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  } from '@chakra-ui/react'
  import {MinusIcon , AddIcon} from '@chakra-ui/icons'

function ProductLeftbar({category,setCategory}) {


    return (

            <div style={{backgroundColor:"#ffffff", padding:"0 15px"}} marginTop="10px">


                <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Cuisines
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} style={{alignItems:"self-start"}}>
                        <Input  variant='filled' placeholder='Search'/>
                        <Box m="10px" textAlign='left' style={category=="North Indian" ? {color:"#ff645a"} : {color:"#b4a6a3"}} onClick={()=>{setCategory("North Indian")}} >North Indian</Box>
                        <Box m="10px" textAlign='left' style={category=="Fast Food" ? {color:"#ff645a"} : {color:"#b4a6a3"}} onClick={()=>{setCategory("Fast Food")}}>Fast Food</Box>
                        <Box m="10px" textAlign='left' style={category=="Chinese" ? {color:"#ff645a"} : {color:"#b4a6a3"}} onClick={()=>{setCategory("Chinese")}}>Chinese</Box>
                        <Box m="10px" textAlign='left' style={category=="Italian" ? {color:"#ff645a"} : {color:"#b4a6a3"}} onClick={()=>{setCategory("Italian")}}>Italian</Box>
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                <hr/>


                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Quick Filters
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} style={{alignItems:"self-start"}}>
                        <Input  variant='filled' placeholder='Search'/>
                        <Box m="10px" textAlign='left' >Causal Dining</Box>
                        <Box m="10px" textAlign='left' >Cafe</Box>
                        <Box m="10px" textAlign='left' >Breakfast</Box>
                        <Box m="10px" textAlign='left' >Bakery</Box>
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>


                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Tags
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} style={{alignItems:"self-start"}}>
                        <Input  variant='filled' placeholder='Search'/>
                        <Box m="10px" textAlign='left'   >Dineout Pay</Box>
                        <Box m="10px" textAlign='left' >Pure Veg</Box>
                        <Box m="10px" textAlign='left' >5 Star</Box>
                        <Box m="10px" textAlign='left' >Buffet</Box>
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
                
                <hr/>

                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Features
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} style={{alignItems:"self-start"}}>
                        <Input  variant='filled' placeholder='Search'/>
                        <Box m="10px" textAlign='left' >Cards Accepted</Box>
                        <Box m="10px" textAlign='left' >Wallet Accepted</Box>
                        <Box m="10px" textAlign='left' >Home Delivery</Box>
                        <Box m="10px" textAlign='left' >Air Conditional</Box>
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>

                </Accordion>

                

            
            {/* <Box style={{alignItems:"self-start"}} >
            <Flex p="5px 0px">
            <Box  p="0px 10px">Cuisines</Box><Spacer/>
            <Box fontWeight="extrabold"><b>+</b></Box>
            </Flex>

            <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems="baseline">
                <Input  variant='filled' placeholder='Search' p="0 10px" m="10px"/>
                <Box style={{alignItems:"flex-start"}} onClick={()=>{setCategory("North Indian")}} >North Indian</Box>
                <Box style={category=="Fast Food" ? {color:"#ff645a"} : {color:"#b4a6a3"}} onClick={()=>{setCategory("Fast Food")}}>Fast Food</Box>
                <Box style={category=="Chinese" ? {color:"#ff645a"} : {color:"#b4a6a3"}} onClick={()=>{setCategory("Chinese")}}>Chinese</Box>
                <Box style={category=="Italian" ? {color:"#ff645a"} : {color:"#b4a6a3"}} onClick={()=>{setCategory("Italian")}}>Italian</Box>
            </VStack>
            </Box> 

             <hr/>

            
                <Flex  p="5px 0px">
                <Box p="0px 10px">Quick Filters</Box><Spacer/>
                <Box>+</Box>
                </Flex>
                <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems="baseline">
                <Input  variant='filled' placeholder='Search' p="0 10px" m="10px"/>
                <Checkbox size='md' colorScheme='blue'>Dineout Pay</Checkbox>
                <Checkbox size='md' colorScheme='blue'>Pure Veg</Checkbox>
                <Checkbox size='md' colorScheme='blue'>5 Star</Checkbox>
                <Checkbox size='md' colorScheme='blue'>Buffet</Checkbox>
            </VStack> 
 
            <hr/>

            <Flex  p="5px 0px">
            <Box p="0px 10px">Tags</Box><Spacer/>
            <Box>+</Box>
            </Flex>
            <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems="baseline">
                <Input  variant='filled' placeholder='Search' p="0 10px" m="10px"/>
                <Checkbox size='md' colorScheme='blue'>Causal Dining</Checkbox>
                <Checkbox size='md' colorScheme='blue'>Cafe</Checkbox>
                <Checkbox size='md' colorScheme='blue'>Breakfast</Checkbox>
                <Checkbox size='md' colorScheme='blue'>Bakery</Checkbox>
            </VStack> 

             <hr/>

            <Flex  p="5px 0px">
            <Box p="0px 10px">Features</Box><Spacer/>
            <Box>+</Box>
            </Flex>
            <VStack spacing={[1, 3]} direction={['column', 'row']} alignItems="baseline">
                <Input  variant='filled' placeholder='Search' p="0 10px" m="10px"/>
                <Checkbox size='md' colorScheme='blue'>Cards Accepted</Checkbox>
                <Checkbox size='md' colorScheme='blue'>Wallet Accepted</Checkbox>
                <Checkbox size='md' colorScheme='blue'>Home Delivery</Checkbox>
                <Checkbox size='md' colorScheme='blue'>Air Conditional</Checkbox>
            </VStack> 
             </Box>*/} 
       </div>
    );
}

export default ProductLeftbar;
