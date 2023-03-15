import React from 'react';
import {Box, Flex} from '@chakra-ui/react'
import ProductLeftbar from './ProductLeftbar';
import ProductPageRightSide from './ProductPageRightSide'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {appThunkActionCreator } from '../Redux/action'
import Pagination from './Pagination';


function ProductMainPage(props) {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("");

    useEffect(()=>{
        dispatch(appThunkActionCreator(page,sort,order))
    },[page,sort,order])

    console.log(sort);
    console.log(order);

    return (

            <Box bg="#f4f4f4">
                <Flex width="80%" margin="auto">
                <ProductLeftbar/>
                <ProductPageRightSide setOrder={setOrder} setSort={setSort}/>
                </Flex>
                <Pagination page={page} setPage={setPage} />
            </Box>

    );
}

export default ProductMainPage;