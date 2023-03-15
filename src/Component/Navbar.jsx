import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { MdSearch, MdOutlineLocalOffer } from "react-icons/md";
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";
import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { DropDownBox } from "./DropDownBox";
import { useNavigate } from "react-router";
import { element } from "prop-types";
import { useSelector } from "react-redux";

let Navbar = () => {
    const navigate = useNavigate();

    const [loginPlaceholder, setLoginPlaceholder] = useState("Login/Register");

    let username = useSelector((store) => {
        return store.userReducer.username;
    });

    // let [count, setCount] = useState(0);
    let count = 0;

    count = useSelector((store) => {
        return store.cartReducer.cart.length;
    });

    useEffect(() => {
        if (username === undefined || username === "" || username === null)
            setLoginPlaceholder("Login/Register");
        else setLoginPlaceholder(` Welcome ! ${username} `);
    }, [username]);

    return (
        <div className="navbar_wrapper">
            <div className="navbar_row1_style">
                <div>
                    <img
                        src="https://cdn.sanity.io/images/gxmub2ol/production/98a9ebae1456c75c727d5fab8c934dae908a144c-1493x380.png"
                        alt="sugar_logo"
                        className="img_style"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </div>

                <div>
                    <div className="navbar_search_wrapper">
                        <input
                            type="text"
                            name="search"
                            className="navbar_search_box"
                            placeholder="Try liquid lipstick"
                        ></input>

                        <div></div>

                        <button className="navbar_search_btn">
                            <BsSearch color="black" />
                            <span>Search</span>
                        </button>
                    </div>
                </div>

                <div>
                    <button
                        className="navbar_login_btn"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        <FaRegUserCircle size={20} m={20} color="white" />
                        <span>{loginPlaceholder}</span>
                    </button>
                </div>

                <div className="navbar_end_icons_wrapper">
                    <div className="navbar_end_icons_wishlist">
                        <FaRegHeart
                            color={"white"}
                            size="20"
                            border="3px solild white"
                        />
                    </div>
                    <div
                        className="navbar_end_icons_cart"
                        onClick={() => navigate("/cart")}
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ color: "red", marginRight: "5px" }}>
                            {count}
                        </span>
                        <BsBag
                            color="white"
                            size="20"
                            border="3px solild white"
                        />
                    </div>
                    <div className="navbar_end_icons_offer">
                        <MdOutlineLocalOffer
                            color="white"
                            size="20"
                            border="3px solild white"
                        />
                    </div>
                </div>
            </div>


            {/* {dropDownBoxes.lips === true ? (
                <DropDownBox contents={ddContentsLips} />
            ) : (
                <> </>
            )} */}
        </div>
    );
};

export { Navbar };
