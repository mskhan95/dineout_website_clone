import React from 'react';
import HomeNavbar from '../HomeNavbar2';
import BestOffers from './offers';
import Card from './resturent';
import Search from './Search';

function Landingpage(props) {
    return (
        <div>
            <HomeNavbar/>
            <Search/>
            <BestOffers/>
            <Card/>
        </div>
    );
}

export default Landingpage;