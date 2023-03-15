import React from 'react';
import {Box, Stack, Input, Checkbox} from '@chakra-ui/react'

function ProductLeftbar(props) {
    return (
        <Box>
            <Box>
            <Box>Quick Filters</Box>
            <Box></Box>
            </Box>
            <Stack >
            <Input variant='filled' placeholder='Filled' />
            </Stack>

            {/* <Stack spacing={[1, 5]} direction={['column', 'row']}> */}
                <Checkbox size='lg' colorScheme='blue'>
                    Checkbox
                </Checkbox>
            {/* </Stack> */}


        </Box>
    );
}

export default ProductLeftbar;
