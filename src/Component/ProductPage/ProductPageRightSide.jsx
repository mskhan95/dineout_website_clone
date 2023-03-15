import React, { useEffect } from 'react';
import {Box, Flex, Grid} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import CardBox from './CardBox';

function ProductPageRightSide(props) {

    const [product, setProduct] = useState()

    let storedata = useSelector((store)=>store.Preducer.products)

    console.log(storedata)

    useEffect(()=>{
        setProduct(storedata)
    },[product])
 
    
    return (
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>

                {
                    storedata?.map((ele,i)=>{
                        return <CardBox key={i+1} ele ={ele} />
                    })
                }

            </Grid>
    );
}

export default ProductPageRightSide;