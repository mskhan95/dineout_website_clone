import React from 'react';
import { Button, Box, Spacer } from '@chakra-ui/react';

function Pagination({page, setPage}) {
    return (
        <div>
            <Box padding="20px" >
            <Button bg="#ff645a" color="white"onClick={()=>{setPage(page-1)}}>Prev</Button>&nbsp;&nbsp;
            <Button >{page}</Button>&nbsp;&nbsp;
            <Button bg="#ff645a" color="white" onClick={()=>{setPage(page+1)}}>Next</Button>
            </Box>
        </div>
    );
}

export default Pagination;