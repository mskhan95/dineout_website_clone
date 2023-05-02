import React from "react";
import "./Navbar.css";
import {
  Box,
  Flex,
  Button,
  Stack,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./Context";

export default function Navbar() {
  const { city, setcity,user, setUser } = useContext(MyContext);
  return (
    <div id="mainDiv" style={{ backgroundColor: "#ffffff" }}>
      <div className="header">
        <div className="logo_section">
          <NavLink to="/">
            <img
              className="pageLogo"
              src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
              alt=""
              width="100px"
            />
          </NavLink>
        </div>

        <div className="location_section">
          <svg
            class="locIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 10 13"
          >
            <path
              fill="#666"
              fill-rule="nonzero"
              d="M5 0a5 5 0 0 1 5 5c0 1.826-.84 3.618-2.213 5.246C6.776 11.446 5.501 12.5 5 12.5c-.501 0-1.776-1.053-2.787-2.254C.84 8.618 0 6.826 0 5a5 5 0 0 1 5-5zm0 1.25A3.75 3.75 0 0 0 1.25 5c0 1.484.72 3.017 1.919 4.441.452.537.948 1.024 1.409 1.405.185.154.422.325.422.325s.263-.193.422-.325c.461-.38.957-.868 1.41-1.405C8.03 8.017 8.75 6.484 8.75 5A3.75 3.75 0 0 0 5 1.25zm0 1.875a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75zm0 1.25a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25z"
            ></path>
          </svg>
          <select
            name=""
            id="select_location"
            onChange={(e) => setcity(e.target.value)}
          >
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        {/*  */}

        <div class="searchBar_sec ">
          <span class="searchsec1">
            <img class="searchIcon" src="data:image/png;base64,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"/>
          </span>
          <input
            class="searchInp_Sec"
            placeholder="Search for Restaurants, Offers, Deals or Events..."
            type="text"
          />
        </div>

        <div className="search_button">
          <button style={{fontSize: 'medium'}}>Search</button>
        </div>

        {/*  */}
        {
          user.length=="" ?
          <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button
                  // padding='0px 50px'
                  backgroundColor="#FF645A"
                  height='1px'
                  _hover={{ bg: "#f30f00", color: "#FFFFFF" }}
                  color="white"
                  variant="solid"
                  size={["sm", "sm"]}
                  id="loginBtn"
                  // onClick={onOpen}
                >
                 {
                  user.length=="" ?   "Login" : user
                 } 
                </Button>
              </Stack>
            </Flex> :
                    <div className="account_section">
                    <div className="userInititals">
                      <p className= "UserInit" >{user}</p>
                    </div>
                    <select name="" id="select_account"  onChange={()=>{setUser("")}}>
                      <option value="Account">My Account </option>
                      <option value="Profile">Profile</option>
                      <option value="Coupon">History</option>
                      <option value="Logout">Logout</option>
                    </select>
                  </div>
               
        }
         </div>



      {/*  */}
      <div className="horizontal_line"></div>
      {/*  */}

      <div className="subHeader">
        <div className="subList">
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/restaurent">
            <button>Book A Table</button>{" "}
          </NavLink>
          <NavLink to="/restaurent">
            <button>Dineout Pay</button>
          </NavLink>
          <a href="https://www.dineout.co.in/blog/">
            <button>Blog</button>
          </a>
        </div>
      </div>
    </div>
  );
}
