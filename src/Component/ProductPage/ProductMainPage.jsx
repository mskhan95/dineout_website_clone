import React from 'react';
import { useSelector } from 'react-redux';
import {Box, Flex} from '@chakra-ui/react'
import ProductLeftbar from './ProductLeftbar';
import ProductPageRightSide from './ProductPageRightSide'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {appThunkActionCreator } from '../Redux/action'
import Pagination from './Pagination';
import Loading from './Loading'


function ProductMainPage(props) {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("");
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("Delhi");

    useEffect(()=>{
        dispatch(appThunkActionCreator(page,sort,order,category,city))
    },[page,sort,order,category,city])

    let storedata = useSelector((store)=>{
        return store.Preducer.products
        })

    return (
        <div>

        {
            storedata.length==0 ? <Loading /> : 
            <Box bg="#f4f4f4">
            <Flex width="80%" margin="auto">
                
            <ProductLeftbar category={category} setCategory={setCategory}/>
            <ProductPageRightSide setOrder={setOrder} setSort={setSort} city={city}/>
            </Flex>
            <Pagination page={page} setPage={setPage} />
        </Box>
        }

            </div>

    );
}

export default ProductMainPage;