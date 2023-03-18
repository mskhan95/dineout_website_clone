import {
    Box,
    Flex,
    Button,
    Stack,
    Show,
    HStack,
    Text,
    useDisclosure,
    IconButton,
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
  } from "@chakra-ui/icons";

  import "./HomeNavbar.css";
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <div id="navFix" style={{fontFamily: "arial, sans-serif"}}>
        <Box
        //** Navbar Background
          bg='#FFFFFF'
          px={9}
          width={["100%"]}
          height='75px'
          
        >
          <Flex h={20} alignItems={"center"} justifyContent={"space-between"} >
            <HStack w="42%">
              <img 
              className="logoImg"
              src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
              />
            </HStack>

            <div class="searchBar ">
              <span class="search1" >
                <svg class='locIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 13">
                  <path fill="#666" fill-rule="nonzero" d="M5 0a5 5 0 0 1 5 5c0 1.826-.84 3.618-2.213 5.246C6.776 11.446 5.501 12.5 5 12.5c-.501 0-1.776-1.053-2.787-2.254C.84 8.618 0 6.826 0 5a5 5 0 0 1 5-5zm0 1.25A3.75 3.75 0 0 0 1.25 5c0 1.484.72 3.017 1.919 4.441.452.537.948 1.024 1.409 1.405.185.154.422.325.422.325s.263-.193.422-.325c.461-.38.957-.868 1.41-1.405C8.03 8.017 8.75 6.484 8.75 5A3.75 3.75 0 0 0 5 1.25zm0 1.875a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75zm0 1.25a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25z">
                  </path>
                </svg>
              </span>
              <input class ="searchInp" placeholder="Search for Restaurants, Cuisines, Location..." type='text' />
            </div>

            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <HStack spacing={8} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  id="myDIV"
                >
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}} >
                    <a href="#Home">
                      {" "}
                      <p>Home</p>
                    </a>
                  </Button>
  
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="#Book A Table">
                      <p>Book A Table</p>
                    </a>
                  </Button>
  
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="#Dineout Pay">
                      {" "}
                      <p>Dineout Pay</p>
                    </a>
                  </Button>
  
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="#Events">
                      <p>Events</p>
                    </a>
                  </Button>
  
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="#Blog">
                      <p>Blog</p>
                    </a>
                  </Button>
                </HStack>
              </HStack>
            </Flex>
  
            
  
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button
                  backgroundColor="#FF645A"
                  _hover={{ bg: "#f30f00", color: "#FFFFFF" }}
                  color="white"
                  variant="solid"
                  size={["sm", "md"]}
                  id="loginBtn"
                >
                  <a
                    href={""}
                    target="_blank"
                  >
                    Login
                  </a>
                  
                </Button>
              </Stack>
            </Flex>
            
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            {isOpen ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  <Button  onClick={isOpen ? onClose : onOpen}>
                    <a href="#Home">
                      {" "}
                      <p>Home</p>
                    </a>
                  </Button>
                  <Button  onClick={isOpen ? onClose : onOpen}>
                    <a href="#Home">
                      {" "}
                      <p>Home</p>
                    </a>
                  </Button>
  
                  <Button  onClick={isOpen ? onClose : onOpen}>
                    <a href="#Home">
                      {" "}
                      <p>Home</p>
                    </a>
                  </Button>
                  <Button  onClick={isOpen ? onClose : onOpen}>
                    <a href="#Home">
                      {" "}
                      <p>Home</p>
                    </a>
                  </Button>
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                  >
                    <a href="#Home">
                      {" "}
                      <p>Home</p>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                  >
                    <a href="#Book_A_Table">
                      <p>Book A Table</p>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                  >
                    <a href="#Dineout_Pay">
                      {" "}
                      <p>Dineout Pay</p>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                  >
                    <a href="#Events">
                      <p>Events</p>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                  >
                    <a href="#Blog">
                      <p>Blog</p>
                    </a>
                  </Button>
                </Stack>
              </Box>
            ) : null}
          </Flex>
        </Box>
      </div>
    );
  }
  