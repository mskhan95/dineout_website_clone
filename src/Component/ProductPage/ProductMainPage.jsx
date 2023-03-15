import React from 'react';
import {Box} from '@chakra-ui/react'
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
                <ProductLeftbar/>
                <ProductPageRightSide/>
            </Box>

    );
}

export default ProductMainPage;