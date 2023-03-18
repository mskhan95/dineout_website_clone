import React, { useEffect } from 'react';
import {Box, Button, Flex, Grid, Heading, Spacer } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import CardBox from './CardBox';
import { Select } from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom";
  import { ChevronRightIcon } from '@chakra-ui/icons'

function ProductPageRightSide({setOrder, setSort, city}) {

    

    let storedata = useSelector((store)=>{
        return store.Preducer.products
        })

    //     const [product, setProduct] = useState(storedata && storedata.length>0 ? storedata : [])

    // console.log(storedata)

    // useEffect(()=>{
    //    setProduct(storedata)
    // },[])

    function HandleSorting(data){
        console.log(data);
        if(data===''){
            setSort("")
            setOrder("")
        }
        else if(data==="rating"){
            setSort(data)
            setOrder("desc")
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
        <Box marginTop="10px" marginLeft="30px">

            <div style={{color:"#a0a0a0",FontSize:"8px", padding:"5px"}} >
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Dineout</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/productpage'>{city}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{city} Restaurants</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
            </div>
           


            <Flex marginTop="15px"> 
                <Box><Heading fontSize="24px" textAlign="center">Best Resturent Near Me in {city}</Heading></Box><Spacer/>
                <Box>
                <Flex margin='10px'>
                    <Box w="100px" font-size="16px" alignItems="center">Sort by</Box>
                    <Select onChange={(e)=>{HandleSorting(e.target.value)}}>
                        <option value=''>Popularity</option>
                        <option value='rating'>Rating</option>
                        <option value='asc'>Price:Low to High</option>
                        <option value='desc'>Price:High to Low</option>
                    </Select>
                    
                </Flex>
                </Box>
            </Flex>
            <Grid templateColumns='repeat(3, 1fr)' gap="5">
                {
                    storedata?.map((ele,i)=>{
                        return <Link to={`/productpage/${ele.id}`}><CardBox key={i+1} ele ={ele} /></Link> 
                    })
                }
            </Grid>
        </Box>
    );
}

export default ProductPageRightSide;