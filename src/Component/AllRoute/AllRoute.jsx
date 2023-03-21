import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ProductMainPage from '../ProductPage/ProductMainPage'
import RestaurentPage from '../RstaurantPages/RestaurantPage'
import Landingpage from '../Home com/Landingpage';
import Event from '../Event';
import Login from '../Login';

function AllRoute(props) {
    return (
        <div>
            <Routes>
                 <Route path='/' element={<Landingpage/> } />
                <Route path='/restaurent' element={<ProductMainPage/> } />
                <Route path='/restaurent/:id' element={ <RestaurentPage/> } />
                <Route path='/restaurent/event' element={ <Event/> } />
                <Route path='/login' element={ <Login/> } />
                <Route path='*' element={ <Event/> } />

            </Routes>
            
        </div>
    );
}

export default AllRoute;