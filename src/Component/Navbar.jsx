import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Show,
    HStack,
    Text,
    useDisclosure,
    IconButton,
    Hide,
  } from "@chakra-ui/react";
  import {
    MoonIcon,
    SunIcon,
    HamburgerIcon,
    CloseIcon,
    AddIcon,
  } from "@chakra-ui/icons";
  import Photo from "./Photo";
  import "./Navbar.css";
  import Success from "./Success";
  
  export default function Navbar() {
    // const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <div id="navFix">
        <Box
        //** Navbar Background
          bg='gray'
          px={9}
          width={["100%"]}
        >
          <Flex h={20} alignItems={"center"} justifyContent={"space-between"} >
            <HStack w="42%">
                <Photo/>
              <Show breakpoint="(min-width: 1000px)">
                {" "}
                {/* <Photo /> */}
              </Show>
            </HStack>
  
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              {/* <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              /> */}
              <HStack spacing={8} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  id="myDIV"
                >
                  <Button className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}} >
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="#Book A Table">
                      <b>Book A Table</b>
                    </a>
                  </Button>
  
                  <Button className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="#Dineout Pay">
                      {" "}
                      <b>Dineout Pay</b>
                    </a>
                  </Button>
  
                  <Button className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="#Events">
                      <b>Events</b>
                    </a>
                  </Button>
  
                  <Button className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="#Blog">
                      <b>Blog</b>
                    </a>
                  </Button>
                </HStack>
              </HStack>
            </Flex>
  
            
  
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                {/* <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button> */}
  
                <Button
                  backgroundColor="#FF645A"
                  _hover={{ bg: "#f30f00", color: "#FFFFFF" }}
                  color="white"
                  variant="solid"
                  size={["sm", "md"]}
                  id="resumeBtn"
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
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Book_A_Table">
                      <b>Book A Table</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Dineout_Pay">
                      {" "}
                      <b>Dineout Pay</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Events">
                      <b>Events</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Blog">
                      <b>Blog</b>
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
  