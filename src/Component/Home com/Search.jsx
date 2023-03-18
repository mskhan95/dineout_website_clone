
// 12345
 


// p


import React, { useState,useEffect,useRef } from "react";

import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Text,
  Button,
  Heading,
  Flex,
  Image,
  Avatar,
  Divider
} from "@chakra-ui/react";

import { SearchIcon } from '@chakra-ui/icons'
const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const suggestionBoxRef = useRef(null);


  let timeoutId;

const handleChange = (e) => {
  const { value } = e.target;
  
  function delayedSearch(value) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      getSearch(value);
      
      setShowModal(true);
    }, 2000);
  }

  function getSearch(value) {
    fetch(
      `https://wild-rose-cape-buffalo-kit.cyclic.app/restaurants?resName_like=${value}`
    )
      .then((res) => res.json())
      .then((data) => setSuggestions(data.slice(0, 10)))
      .catch((err) => console.log(err));
  }

  setQuery(value );
  delayedSearch(value);
  
};


useEffect(() => {
  const handleClick = (event) => {
    if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };
  
  document.addEventListener('click', handleClick);
  
  return () => {
    document.removeEventListener('click', handleClick);
  };
}, []);

  return (
    <Box
    bgImage="https://im1.dineout.co.in/images/uploads/misc/2021/Mar/31/oldherobannerwebfinal_bau.jpg"
      bgSize="cover"
      height="300px"
      textAlign="center"
      paddingTop="100px"
      marginBottom='50px'
    >
      <Heading fontSize="3xl" fontWeight="bold" color="white">
         It's Now Safe To  <Heading as="span" color="#FF645A">Crave!</Heading>
       </Heading>
       <Box ml='75px' mr='75px' h='60px' bg='white' borderRadius='lg'>
       <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          
          children={<SearchIcon color="#FF645A" boxSize={6} mt='18px' />}
        />
        <Input type="text" placeholder="Search"  h='60px' onChange={handleChange} />
        <Button bg='#FF645A' color='white' h='50px' m='5px' w='130px'>Search</Button>
      </InputGroup>
       
       </Box>
              <Box
        border="1px solid #ccc"
        borderRadius="md"
        bg="white"
        boxShadow="0 0 10px black"
        position="relative"
        zIndex="1"
        marginTop="-1px"
        maxHeight="250px"
        overflowY="auto"
        ml='78px' mr='450px'
        ref={suggestionBoxRef}
      >
                
                <List  >
                  {suggestions.map((item) => (
                    <ListItem
                     
                      key={item.id}
                      px={4}
                      py={2}
                      _hover={{ background: "#f5f5f5" }}
                      onClick={() => {
                        setQuery(item.resName);
                        // setShowModal(false);
                      }}
                    >
                      <Flex justifyContent='space-between'>
                      
                      <Avatar  size='md' src={item.image} />
                      <Text pt='5px'>{item.resName}</Text>
                      <Box fontSize='sm'textAlign='center'bg='#8cbb0f' p='6px 8px' color='white' w='50px'borderRadius="md" h='30px'  >{item.rating}</Box>
                      
                      </Flex>
                      
                      <Divider  />
                    </ListItem>
                  ))}
                </List>

                
                
              </Box>
             
             </Box>
  );
};

export default Search;
























