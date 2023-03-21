import React, { useState, useEffect } from "react";
import "./Otp.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
} from '@chakra-ui/react'


export default function Otp() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [enter, setEnter] = useState("");
    const [otp, setOtp] = useState("");

    const newOtp = () => {
        setOtp(Math.floor(Math.random() * 10000) +1);
    }

    useEffect(() => {
        newOtp();
    }, []) 

    const handleOpen =()=>{
        onOpen();
        alert("Your OTP is " + otp);
        console.log(otp)
    }

    const handleSubmit = () => {
        if (enter == otp){
            onClose();
        }
        else alert("Wrong OTP entered. Please Try Again!");
    };

  return (
    <>
      <Button onClick={() => handleOpen()}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='#FF645A' fontWeight='bold'>Log In / Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {/* <FormLabel>Enter Mobile number or Email</FormLabel> */}
              <Input placeholder='Enter the OTP sent to your mobile no' type="number"
                
                onChange={(e) => setEnter(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <p style={{color:'rgb(43, 232, 232)', fontSize: '13px'}}>A One Time Password(OTP) has been sent to your phone, please enter it here to log in</p>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg='#FF645A' color="white" p='20px 200px' borderRadius='none' _hover={{bg: '#f30f00'}}
            onClick={() => handleSubmit()}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
        
      </Modal>
    </>
  )
}