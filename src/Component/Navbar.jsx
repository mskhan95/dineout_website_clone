import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="mainDiv">
        <div className="header">
            <div className="logo_section">
                <img className="pageLogo" src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png" alt="" width="100px" />
            </div>

            <div className="location_section">
                <svg class='locIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 13">
                    <path fill="#666" fill-rule="nonzero" d="M5 0a5 5 0 0 1 5 5c0 1.826-.84 3.618-2.213 5.246C6.776 11.446 5.501 12.5 5 12.5c-.501 0-1.776-1.053-2.787-2.254C.84 8.618 0 6.826 0 5a5 5 0 0 1 5-5zm0 1.25A3.75 3.75 0 0 0 1.25 5c0 1.484.72 3.017 1.919 4.441.452.537.948 1.024 1.409 1.405.185.154.422.325.422.325s.263-.193.422-.325c.461-.38.957-.868 1.41-1.405C8.03 8.017 8.75 6.484 8.75 5A3.75 3.75 0 0 0 5 1.25zm0 1.875a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75zm0 1.25a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25z">
                    </path>
                </svg>
                <select name="" id="select_location">
                    <option value="City1">City1</option>
                    <option value="City2">City2</option>
                    <option value="City3">City3</option>
                    <option value="City4">City4</option>
                </select>
            </div>

            {/*  */}

            <div class="searchBar_sec ">
              <span class="searchsec1" >
                <svg class='searchIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 13">
                  <path fill="#666" fill-rule="nonzero" d="M5 0a5 5 0 0 1 5 5c0 1.826-.84 3.618-2.213 5.246C6.776 11.446 5.501 12.5 5 12.5c-.501 0-1.776-1.053-2.787-2.254C.84 8.618 0 6.826 0 5a5 5 0 0 1 5-5zm0 1.25A3.75 3.75 0 0 0 1.25 5c0 1.484.72 3.017 1.919 4.441.452.537.948 1.024 1.409 1.405.185.154.422.325.422.325s.263-.193.422-.325c.461-.38.957-.868 1.41-1.405C8.03 8.017 8.75 6.484 8.75 5A3.75 3.75 0 0 0 5 1.25zm0 1.875a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75zm0 1.25a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25z">
                  </path>
                </svg>
              </span>
              <input class ="searchInp_Sec" placeholder="Search for Restaurants, Offers, Deals or Events..." type='text' />
            </div>

            <div className="search_button">
                <button>Search</button>
            </div>

            {/*  */}

            <div className="account_section">
                <div className="userInititals"><p>AD</p></div>
                <h1 id="userName"></h1>
                <select name="" id="select_account">
                    <option value="Account">My Account </option>
                    <option value="Profile">Profile</option>
                    <option value="Coupon">History</option>
                    <option value="Logout">Logout</option>
                </select>
            </div>
        </div>

        {/*  */}
        <div className="horizontal_line">
            
        </div>
        {/*  */}

        <div className="subHeader">
            <div className="subList">
                <button>Home</button>
                <button>Book A Table</button>
                <button>Dineout Pay</button>
                <button>Blog</button>
            </div>
        </div>
    </div>
  )
}

