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
            <svg
              class="searchIcon"
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
          </span>
          <input
            class="searchInp_Sec"
            placeholder="Search for Restaurants, Offers, Deals or Events..."
            type="text"
          />
        </div>

        <div className="search_button">
          <button>Search</button>
        </div>

        {/*  */}
        {
          user.length=="" ?
          <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button
                  backgroundColor="#FF645A"
                  _hover={{ bg: "#f30f00", color: "#FFFFFF" }}
                  color="white"
                  variant="solid"
                  size={["sm", "md"]}
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
                      <p>{user}</p>
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
