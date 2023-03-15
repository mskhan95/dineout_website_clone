import React from 'react';
import {Box, Flex} from '@chakra-ui/react'
import ProductLeftbar from './ProductLeftbar';
import ProductPageRightSide from './ProductPageRightSide'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {appThunkActionCreator } from '../Redux/action'


function ProductMainPage(props) {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(appThunkActionCreator())
    },[])

    return (

            <Box>
                <Flex width="80%" margin="auto">
                <ProductLeftbar/>
                <ProductPageRightSide/>
                </Flex>
            </Box>

    );
}

export default ProductMainPage;