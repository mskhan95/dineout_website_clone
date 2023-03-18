import React from 'react';
import "./Login.css";
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
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'


export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

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
              <Input ref={initialRef} placeholder='Enter Mobile number or Email'/>
            </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input placeholder='Enter name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg='#FF645A' color="white" p='20px 200px' borderRadius='none' _hover={{bg: '#f30f00'}}>
              Continue
            </Button>
          </ModalFooter>
          <div class="_2NTob">
            <span class="orLogin">Or login via</span>
          </div>
          <div class="fbGmail">
            <img src="data:image/png;base64,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" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3ytXX-puE5_BXnyM2FiEmANGzMiGe7PdYWfhwiYC4GwGwNWnAsNw3igef7WUXHpx--4&usqp=CAU" />
          </div>
        </ModalContent>
        
      </Modal>
    </>
  )
}