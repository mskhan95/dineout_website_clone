import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ProductMainPage from '../ProductPage/ProductMainPage'

function AllRoute(props) {
    return (
        <div>
            <Routes>
                <Route path='/Product' element={<ProductMainPage/> } />
            </Routes>
            
        </div>
    );
}

export default AllRoute;