import React, { useEffect } from 'react';
import {Box} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useState } from 'react'

function ProductPageRightSide(props) {

    const [product, setProduct] = useState()

    let storedata = useSelector((store)=>store.Preducer.products)

    console.log(storedata)

    useEffect(()=>{
        setProduct(storedata)
    },[product])
 
    
    return (
            <Box>
                {
                    storedata?.map((ele,i)=>{
                        return <div key={i+1}>
                            <img src={ele.image} alt="alt"/>
                        </div>
                    })
                }

            </Box>
    );
}

export default ProductPageRightSide;