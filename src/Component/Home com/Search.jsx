import {Box,Text,Input, Button,InputGroup,InputLeftElement,Heading} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
function Search(){
    return(
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
     
      
      
    
    {/* kk */}
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="#FF645A" />}
      />
      <Input placeholder="Search" bg="white" />
      
      <Button bg='#FF645A' color='white'>Search</Button>
    </InputGroup>
  

    </Box>
    )
}
export default Search;

// 12345


// import React, { useState } from "react";
// import {
//   Box,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   List,
//   ListItem,
//   Text,
// } from "@chakra-ui/react";

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setQuery(value);
//     // Here, you can make an API call to fetch the suggestions based on the query
//     // For this example, I'll just show some hardcoded suggestions
//     setSuggestions([
//       "React",
//       "Chakra UI",
//       "Next.js",
//       "Tailwind CSS",
//       "Firebase",
//     ]);
//   };

//   return (
//     <Box>
//       <InputGroup>
//         <InputLeftElement
//           pointerEvents="none"
//           children={<i className="fa fa-search" />}
//         />
//         <Input type="text" placeholder="Search" onChange={handleChange} />
//       </InputGroup>
//       {query.length > 0 && (
//         <Box mt={2} border="1px solid #ccc" borderRadius="md" bg="white" ml='100px' w='50%'>
//           <List>
//             {suggestions.map((item) => (
//               <ListItem
//                 key={item}
//                 px={4}
//                 py={2}
//                 _hover={{ background: "#f5f5f5" }}
//               >
//                 <Text>{item}</Text>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Search;