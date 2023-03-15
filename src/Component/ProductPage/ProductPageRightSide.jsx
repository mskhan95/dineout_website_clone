import React, { useEffect } from 'react';
import {Box, Button, Flex, Grid, Spacer} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import CardBox from './CardBox';
import { Select } from '@chakra-ui/react'

function ProductPageRightSide({setOrder, setSort}) {

    

    let storedata = useSelector((store)=>{

        return store.Preducer.products

        })
        const [product, setProduct] = useState(storedata && storedata.length>0 ? storedata : [])

    console.log(storedata)

    useEffect(()=>{
        setProduct(storedata)
    },[])

    function HandleSorting(data){
        console.log(data);
        if(data===''){
            setSort("")
            setOrder("")
        }
        else if(data==="rating"){
            setSort(data)
            setOrder("asc")
        }
        else if(data==="asc"){
            setSort("price")
            setOrder(data)
        }
        else if(data==="desc"){
            setSort("price")
            setOrder(data)
        }
    }
    
    return (
        <Box>
            <Flex> 
                <Box>Best Resturent Near Me in Delhi</Box><Spacer/>
                <Flex>
                    <Box>Sort by</Box>
                    <Select onChange={(e)=>{HandleSorting(e.target.value)}}>
                        <option value=''>Popularity</option>
                        <option value='rating'>Rating</option>
                        <option value='asc'>Price:Low to High</option>
                        <option value='desc'>Price:High to Low</option>
                    </Select>
                </Flex>
            </Flex>
            <Grid templateColumns='repeat(3, 1fr)' gap="3">
                {
                    storedata?.map((ele,i)=>{
                        return <CardBox key={i+1} ele ={ele} />
                    })
                }
            </Grid>
        </Box>
    );
}

export default ProductPageRightSide;