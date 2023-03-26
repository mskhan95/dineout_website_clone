import React from "react";
import  "./RestaurantPage.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from '../Navbar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useParams } from "react-router-dom";
import axios from "axios";
    const data = {
    image:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/a/j/p20996-145631488756cd9a0796608.jpg?tr=tr:n-medium",
    rating: 4.2,
    resName: "Tamasha",
    "restnt-name-href":
      "https://www.dineout.co.in/delhi/tamasha-connaught-place-central-delhi-20996",
    address: "Connaught Place",
    "restnt-loc-href":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi/connaught-place",
    location: "Central Delhi",
    "restnt-loc-href-2":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi",
    price: "₹ 2000",
    category: "Continental",
    "double-line-ellipsis-href":
      "https://www.dineout.co.in/delhi-restaurants/continental-cuisine",
    "double-line-ellipsis-4": ",",
    category2: "Asian",
    "double-line-ellipsis-href-2":
      "https://www.dineout.co.in/delhi-restaurants/asian-cuisine",
    "double-line-ellipsis-6": ",",
    category3: "Italian",
    "double-line-ellipsis-href-3":
      "https://www.dineout.co.in/delhi-restaurants/italian-cuisine",
    "double-line-ellipsis-8": ",",
    category4: "North Indian",
    "double-line-ellipsis-href-4":
      "https://www.dineout.co.in/delhi-restaurants/north-indian-cuisine",
    btn: "Dineout Pay",
    "btn-href":
      "https://www.dineout.co.in/dineout-pay/instant-discount/how-it-works",
    "restnt-loc-4": "",
    "restnt-loc-href-3": "",
    id: 1,
  };
const RestaurentPage = () => {
  // const [data, setdata] = useState({});
  const [time_ct, settime_ct] = useState(1);
  const [add_ct, setadd_ct] = useState(0);
  const [review, setreview] = useState(false);
  const [arr, setarr] = useState([]); //data
  const [lunch, setlunch] = useState(true);
  const [breakfast, setbreakfast] = useState(false);
  const [dinner, setdinner] = useState(false);
  const [email, setemail] = useState({
    email: false,
    Optional: false,
  });
  const [rating, setrating] = useState({ rating: 0 });
  const [date, setdate] = useState({
    date1: true,
    date2: false,
    date3: false,
    date4: false,
    date5: false,
    date6: false,
    date7: false,
    date8: false,
    date9: false,
    date10: false,
    date11: false,
    date12: false,
    date13: false,
    date14: false,
    date15: false,
    date16: false,
    date17: false,
    date18: false,
    date19: false,
    date20: false,
    date21: false,
    date22: false,
  });
  const [sub_date, setsub_date] = useState(1);
  const [time, setTime] = useState("");
  const [guest, setguest] = useState(0);
  const [details, setdetails] = useState({ name: "", number: "" });
  const [rating2, setrating2] = useState({ rating: 0, text: "" });
  // console.log(arr);
  const [payment, setpayment] = useState(false);
  const { id } = useParams();
  // console.log(id);
var res;
  useEffect(() => {
    axios
      .get(`https://wild-rose-cape-buffalo-kit.cyclic.app/restaurants?id=${ id }`)
      .then((res) => {
        // console.log(res.data);
        setarr(res.data[0]);
      // console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  console.log(arr);
  const arr1 = {
    image:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/b/t/p27452-15020105505986dcb6d147f.jpg?tr=tr:n-medium",
    rating: 4,
    resName: "Local",
    "restnt-name-href":
      "https://www.dineout.co.in/delhi/local-connaught-place-central-delhi-27452",
    address: "Scindia House,",
    "restnt-loc-href":
      "https://www.dineout.co.in/delhi-restaurants/scindia-house-landmark",
    location: "Connaught Place",
    "restnt-loc-href-2":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi/connaught-place",
    price: "₹ 2000",
    category: "North Indian",
    "double-line-ellipsis-href":
      "https://www.dineout.co.in/delhi-restaurants/north-indian-cuisine",
    "double-line-ellipsis-4": ",",
    category2: "Asian",
    "double-line-ellipsis-href-2":
      "https://www.dineout.co.in/delhi-restaurants/asian-cuisine",
    "double-line-ellipsis-6": ",",
    category3: "Continental",
    "double-line-ellipsis-href-3":
      "https://www.dineout.co.in/delhi-restaurants/continental-cuisine",
    "double-line-ellipsis-8": "",
    category4: "",
    "double-line-ellipsis-href-4": "",
    btn: "Dineout Pay",
    "btn-href":
      "https://www.dineout.co.in/dineout-pay/instant-discount/how-it-works",
    "restnt-loc-4": "Central Delhi",
    "restnt-loc-href-3":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi",
    id: 2,
  };
  const arr2 = {
    image:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/u/y/p20941-15700828565d959028e9f28.jpg?tr=tr:n-medium",
    rating: 4,
    resName: "Unplugged Courtyard",
    "restnt-name-href":
      "https://www.dineout.co.in/delhi/unplugged-courtyard-connaught-place-central-delhi-20941",
    address: "Connaught Place",
    "restnt-loc-href":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi/connaught-place",
    location: "Central Delhi",
    "restnt-loc-href-2":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi",
    price: "₹ 3300",
    category: "North Indian",
    "double-line-ellipsis-href":
      "https://www.dineout.co.in/delhi-restaurants/north-indian-cuisine",
    "double-line-ellipsis-4": ",",
    category2: "Italian",
    "double-line-ellipsis-href-2":
      "https://www.dineout.co.in/delhi-restaurants/italian-cuisine",
    "double-line-ellipsis-6": ",",
    category3: "Chinese",
    "double-line-ellipsis-href-3":
      "https://www.dineout.co.in/delhi-restaurants/chinese-cuisine",
    "double-line-ellipsis-8": ",",
    category4: "Turkish",
    "double-line-ellipsis-href-4":
      "https://www.dineout.co.in/delhi-restaurants/turkish-cuisine",
    btn: "Dineout Pay",
    "btn-href":
      "https://www.dineout.co.in/dineout-pay/instant-discount/how-it-works",
    "restnt-loc-4": "",
    "restnt-loc-href-3": "",
    id: 4,
  };
  const arr3 = {
    image:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/a/j/p20996-145631488756cd9a0796608.jpg?tr=tr:n-medium",
    rating: 4.2,
    resName: "Tamasha",
    "restnt-name-href":
      "https://www.dineout.co.in/delhi/tamasha-connaught-place-central-delhi-20996",
    address: "Connaught Place",
    "restnt-loc-href":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi/connaught-place",
    location: "Central Delhi",
    "restnt-loc-href-2":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi",
    price: "₹ 2000",
    category: "Continental",
    "double-line-ellipsis-href":
      "https://www.dineout.co.in/delhi-restaurants/continental-cuisine",
    "double-line-ellipsis-4": ",",
    category2: "Asian",
    "double-line-ellipsis-href-2":
      "https://www.dineout.co.in/delhi-restaurants/asian-cuisine",
    "double-line-ellipsis-6": ",",
    category3: "Italian",
    "double-line-ellipsis-href-3":
      "https://www.dineout.co.in/delhi-restaurants/italian-cuisine",
    "double-line-ellipsis-8": ",",
    category4: "North Indian",
    "double-line-ellipsis-href-4":
      "https://www.dineout.co.in/delhi-restaurants/north-indian-cuisine",
    btn: "Dineout Pay",
    "btn-href":
      "https://www.dineout.co.in/dineout-pay/instant-discount/how-it-works",
    "restnt-loc-4": "",
    "restnt-loc-href-3": "",
    id: 1,
  };
  // console.log(time_ct);
  return !payment ? (
    <div >
    <Navbar/>
      <div className="restaurent_container" style={{marginTop:"30px"}}>
        <div className="restaurent_main">
          {/* <p className="restaurent_header">
            Dineout &nbsp;&nbsp;{">"}
            &nbsp;&nbsp;Delhi&nbsp;&nbsp;{">"}
            &nbsp;&nbsp;{arr["location"]}&nbsp;&nbsp;
            {">"}&nbsp;&nbsp;{arr["category4"]}
            &nbsp;&nbsp;{">"}
            &nbsp;&nbsp;{arr["resName"]}
          </p> */}

          <div style={{color:"#a0a0a0",FontSize:"8px", padding:"5px"}} >
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Dineout</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/productpage'>{arr["City"]}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{arr["location"]}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{arr["resName"]}</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
            </div>








          <div className="restnt-top1">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={arr["image"]} alt="img" className="restaurent_img" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/z/l/p108274-1664864698633bd1ba60d21.jpg?tr=tr:n-large"
                  alt="img"
                  className="restaurent_img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/r/j/p108274-1664864719633bd1cf9ea21.jpg?tr=tr:n-large"
                  alt="img"
                  className="restaurent_img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/u/s/p108274-1664864729633bd1d99c480.jpg?tr=tr:n-large"
                  alt="img"
                  className="restaurent_img"
                />
              </SwiperSlide>
            </Swiper>
            <div className="restnt_name_rating">
              <h1 className="restnt_name">{arr["resName"]}</h1>
              <button>{arr["rating"]} ★</button>
            </div>
            <Link to="" className="restnt_dtls_link">
              <p className="restnt_dtls">
                {arr["price"]} | {arr["category"]}
                {arr["address"]}, {arr["location"]}
                <br />
                {arr["category2"]} | Delhi |&nbsp;{" "}
                <span>&nbsp; Get Direction</span>
                <br />
              </p>
            </Link>
            <p className="restnt_dtls">
              Time: 11:30 Am to 10:30 PM &nbsp;<span>(Open Now)</span>
              <h1
                onClick={() => {
                  settime_ct(time_ct + 1);
                }}
              >
                &nbsp;&nbsp; ﹀
              </h1>
              {time_ct % 2 === 0 ? (
                <div className="restnt_time">
                  <p>
                    Sunday11:30 Am to 10:30 PM <br />
                    Monday11:30 Am to 10:30 PM
                    <br />
                    Tuesday11:30 Am to 10:30 PM <br />
                    Wednesday11:30 Am to 10:30 PM <br />
                    Thursday11:30 Am to 10:30 PM <br />
                    Friday11:30 Am to 10:30 PM <br />
                    Saturday11:30 Am to 10:30 PM
                  </p>
                </div>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="restnt-top2">
            <button className="overview">Overview</button>
            <button>Menu</button>
            <button>About</button>
            <button>Help</button>
          </div>
          <div className="restnt-top3">
            <img
              src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/11/gp-logo.png?tr=tr:n-medium"
              alt="img2"
            ></img>
            <p>
              Combine any offer with Dineout Pay to save up to 5% more on your
              bill
            </p>
          </div>
          <div className="menu">
            <h1>Menu</h1>
            <img
              src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/c/x/m60331-15732101745dc5483e49fad.jpg?tr=tr:n-small"
              alt="img2"
            />
            <div>
              <p>Menu (5)</p>
            </div>
          </div>
          <div className="restnt-top4">
            <div className="about">
              <h1>About</h1>
              <div>
                <img
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_30.png"
                  alt="img2"
                />
                <p>
                  <span>CUISINE</span>
                  <br />
                  {arr["category"]} ,{arr["category3"]}
                </p>
              </div>
              <div>
                <img
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_5.png"
                  alt="img2"
                />
                <p>
                  <span>TYPE</span>
                  <br />
                  Casual Dining
                </p>
              </div>
              <div>
                <img
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/grouprupee.png"
                  alt="img2"
                />
                <p>
                  <span>AVERAGE COST</span>
                  <br />
                  1,000 for two people
                </p>
              </div>
              <div>
                <img
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_2.png"
                  alt="img2"
                />
                <p>
                  <span>FACILITIES & FEATURES</span>
                  <br />
                </p>
              </div>
              <div
                className="about_bottom"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                }}
              >
                <div>
                  <img
                    src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/7.png"
                    alt="img2"
                  />
                  <p>Air Conditioned</p>
                </div>
                <div>
                  <img
                    src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/9.png"
                    alt="img2"
                  />
                  <p>Home Delivery</p>
                </div>
                <div>
                  <img
                    src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/13.png"
                    alt="img2"
                  />
                  <p>Cards Accepted</p>
                </div>
                <div>
                  <img
                    src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/16.png"
                    alt="img2"
                  />
                  <p>Outdoor Seating</p>
                </div>
                <div>
                  <img
                    src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/2.png"
                    alt="img2"
                  />
                  <p>Wellet Accepted</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sugg_header">
            <h1>You May Also Like</h1>
            <p>Checkout these great restaurants</p>
          </div>
          <div className="suggestion">
            <div className="sug_cards">
              <div
                className="single_card"
                onClick={() => {
                  setarr(arr3);
                  console.log(arr);
                }}
              >
                <img src={arr3["image"]} alt="img" />
                <div className="single_card_bt">
                  <div className="left">
                    <h1>{arr3["resName"]}</h1>
                    <p>
                      {arr3["address"]} ,{arr3["location"]}
                    </p>
                    <h3>1 offers Available</h3>
                  </div>
                  <div className="right">
                    <p>
                      {arr3["rating"]}
                      <br />
                      <span>★</span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_card"
                onClick={() => {
                  setarr(arr2);
                  console.log(arr);
                }}
              >
                <img src={arr2["image"]} alt="img" />
                <div className="single_card_bt">
                  <div className="left">
                    <h1>{arr2["resName"]}</h1>
                    <p>
                      {arr2["address"]} ,{arr2["location"]}
                    </p>
                    <h3>1 offers Available</h3>
                  </div>
                  <div className="right">
                    <p>
                      {arr2["rating"]}
                      <br />
                      <span>★</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="single_card">
                <img
                  src={arr1["image"]}
                  alt="img"
                  onClick={() => {
                    setarr(arr1);
                    console.log(arr);
                  }}
                />
                <div className="single_card_bt">
                  <div className="left">
                    <h1>{arr1["resName"]}</h1>
                    <p>
                      {arr1["address"]} , {arr1["location"]}
                    </p>
                    <h3>1 offers Available</h3>
                  </div>
                  <div className="right">
                    <p>
                      {arr1["rating"]}
                      <br />
                      <span>★</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="missing_add">
            <div>
              {add_ct % 2 === 0 ? (
                <div className="missing_add_1">
                  <p>Missing some information?</p>
                  <button
                    onClick={() => {
                      setadd_ct(add_ct + 1);
                    }}
                  >
                    add now
                  </button>
                </div>
              ) : (
                <div className="missing_add_2">
                  <div>
                    <p>What did we miss out?</p>
                    <button
                      onClick={() => {
                        setadd_ct(add_ct + 1);
                      }}
                    >
                      x
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Please let use know if there is somrting wrong or missing on this page"
                  />
                  <button
                    onClick={() => {
                      alert("We'll look into this");
                      setadd_ct(add_ct + 1);
                    }}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="rating">
            <h1>Ratings & Reviews</h1>
            <div className="rating_top">
              <div className="left">
                <div className="left_1">
                  <button>{arr["rating"]}★</button>
                  <h1>7 votes</h1>
                  <p>4 Reviews</p>
                </div>
                <div className="left_2">
                  <img src="https://i.stack.imgur.com/2kC6U.png" alt="img5" />
                </div>
              </div>
              <div className="right">
                <div>
                  <button
                    onClick={() => {
                      setrating({ ...rating, rating: 1 });
                    }}
                  >
                    ☆
                  </button>
                  <button
                    onClick={() => {
                      setrating({ ...rating, rating: 2 });
                    }}
                  >
                    ☆
                  </button>
                  <button
                    onClick={() => {
                      setrating({ ...rating, rating: 3 });
                    }}
                  >
                    ☆
                  </button>
                  <button
                    onClick={() => {
                      setrating({ ...rating, rating: 4 });
                    }}
                  >
                    ☆
                  </button>
                  <button
                    onClick={() => {
                      setrating({ ...rating, rating: 5 });
                    }}
                  >
                    ☆
                  </button>
                </div>
                <p> Rate this Place</p>
              </div>
            </div>
            {rating.rating !== 0 ? (
              <div className="rating_sub">
                <input
                  type="text"
                  placeholder="Enter Feedback"
                  onChange={(e) => {
                    setrating2({ ...rating2, text: e.target.value });
                  }}
                />
                <button
                  onClick={() => {
                    setrating2({ ...rating2, rating: rating.rating });
                    setrating({ rating: 0 });
                  }}
                >
                  Submit
                </button>
              </div>
            ) : (
              ""
            )}
            <div className="rating_bottom">
              <div className="left">
                <img
                  src="https://lh5.googleusercontent.com/-8WRkM3Fw4VY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reXuKw7H2gJ1GLFG_3qtDOlyRdLmA/s96-c/photo.jpg"
                  alt="img6"
                />
              </div>
              <div className="right">
                <h1>Rakesh Prabhu</h1>
                <h3>
                  5 <span>★</span>
                </h3>
                <h4>Liked: Food,Customer Service, Ambience</h4>
                <p>good Service</p>
              </div>
            </div>
            <div className="rating_bottom">
              <div className="left">
                <img
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Aug/1/person_avatar.png"
                  alt="img5"
                />
              </div>
              <div className="right">
                <h1>R Shambhu</h1>
                <h3>
                  5 <span>★</span>
                </h3>
                <h4>Liked: Food,Customer Service, Ambience</h4>
                <p>
                  there was a good spread. all those barbecue were great .the
                  chicken in biriyani tasted like barbecued flavour.
                  <br /> overall it was worthy experience
                </p>
              </div>
            </div>
            <div className="rating_bottom">
              <div className="left">
                <img
                  src="https://lh3.googleusercontent.com/-khdqYRjnwYA/AAAAAAAAAAI/AAAAAAAAABQ/EjTdWKmhuJk/s96-c/photo.jpg"
                  alt="img5"
                />
              </div>
              <div className="right">
                <h1>Rakesh Prabhu</h1>
                <h3>
                  4 <span>★</span>
                </h3>
                <h4>Liked: Food,Customer Service, Music, Ambience</h4>
                <p>
                  i'm a regular dinner at hotspot <br /> food and staff are
                  superb.
                </p>
                {review === false ? (
                  <button
                    onClick={() => {
                      setreview(true);
                    }}
                  >
                    View all (+1) ﹀
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {review ? (
              <div className="rating_bottom">
                <div className="left">
                  <img
                    src="https://im1.dineout.co.in/images/uploads/misc/2019/Aug/1/person_avatar.png"
                    alt="img5"
                  />
                </div>
                <div className="right">
                  <h1>Surya Prakash</h1>
                  <h3>
                    {rating2.rating} <span>★</span>
                  </h3>
                  <h4>Liked: Food,Customer Service, Ambience</h4>
                  <p>{rating2.text}</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="help">
            <h1>We're always here to help</h1>
            <div>
              <div>
                <img
                  src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png"
                  alt="img3"
                />
                <p>
                  Call Us <br />
                  +91 9212340202
                </p>
              </div>
              <div>
                <img
                  src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png"
                  alt="img3"
                />
                <p>
                  Call the restaurant <br />
                  09995806837
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="calender">
          <div className="clr_head">
            <h1>Select an Offer or Deal</h1>
          </div>
          <p>Select Date</p>
          <div className="date">
            <div className="left">
              <button>FEB</button>
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2020/Feb/14/calendar-img.png"
                alt="img4"
              />
            </div>
            <div className="right">
              <div>
                <span>TODAY</span>
                {date.date1 ? (
                  <p className="selectedDate">1</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(1);
                      setdate({
                        date1: true,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    1
                  </p>
                )}
              </div>
              <div>
                <span>Sat</span>
                {date.date2 ? (
                  <p className="selectedDate">2</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(2);
                      setdate({
                        date1: false,
                        date2: true,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    2
                  </p>
                )}
              </div>
              <div>
                <span>Sun</span>
                {date.date3 ? (
                  <p className="selectedDate">3</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(3);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: true,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    3
                  </p>
                )}
              </div>
              <div>
                <span>Mon</span>
                {date.date4 ? (
                  <p className="selectedDate">4</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(4);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: true,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    4
                  </p>
                )}
              </div>
              <div>
                <span>Tue</span>
                {date.date5 ? (
                  <p className="selectedDate">5</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(5);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: true,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    5
                  </p>
                )}
              </div>
              <div>
                <span>Wed</span>
                {date.date6 ? (
                  <p className="selectedDate">6</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(6);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: true,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    6
                  </p>
                )}
              </div>
              <div>
                <span>Thu</span>
                {date.date7 ? (
                  <p className="selectedDate">7</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(7);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: true,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    7
                  </p>
                )}
              </div>
              <div>
                <span>Fri</span>
                {date.date8 ? (
                  <p className="selectedDate">8</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(8);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: true,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    8
                  </p>
                )}
              </div>
              <div>
                <span>Sat</span>
                {date.date9 ? (
                  <p className="selectedDate">9</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(9);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: true,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    9
                  </p>
                )}
              </div>
              <div>
                <span>Sun</span>
                {date.date10 ? (
                  <p className="selectedDate">10</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(10);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: true,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    10
                  </p>
                )}
              </div>
              <div>
                <span>Mon</span>
                {date.date11 ? (
                  <p className="selectedDate">11</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(11);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: true,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    11
                  </p>
                )}
              </div>
              <div>
                <span>Tue</span>
                {date.date12 ? (
                  <p className="selectedDate">12</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(12);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: true,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    12
                  </p>
                )}
              </div>
              <div>
                <span>Wed</span>
                {date.date13 ? (
                  <p className="selectedDate">13</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(13);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: true,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    13
                  </p>
                )}
              </div>
              <div>
                <span>Thu</span>
                {date.date14 ? (
                  <p className="selectedDate">14</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(14);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: true,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    14
                  </p>
                )}
              </div>
              <div>
                <span>Fri</span>
                {date.date15 ? (
                  <p className="selectedDate">15</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(15);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: true,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    15
                  </p>
                )}
              </div>
              <div>
                <span>Sat</span>
                {date.date16 ? (
                  <p className="selectedDate">16</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(16);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: true,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    16
                  </p>
                )}
              </div>
              <div>
                <span>Sun</span>
                {date.date17 ? (
                  <p className="selectedDate">17</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(17);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: true,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    17
                  </p>
                )}
              </div>
              <div>
                <span>Mon</span>
                {date.date18 ? (
                  <p className="selectedDate">18</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(18);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: true,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    18
                  </p>
                )}
              </div>
              <div>
                <span>Tue</span>
                {date.date19 ? (
                  <p className="selectedDate">19</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(19);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: true,
                        date20: false,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    19
                  </p>
                )}
              </div>
              <div>
                <span>Wed</span>
                {date.date20 ? (
                  <p className="selectedDate">20</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(20);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: true,
                        date21: false,
                        date22: false,
                      });
                    }}
                  >
                    20
                  </p>
                )}
              </div>
              <div>
                <span>Thu</span>
                {date.date21 ? (
                  <p className="selectedDate">21</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(21);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: true,
                        date22: false,
                      });
                    }}
                  >
                    21
                  </p>
                )}
              </div>
              <div>
                <span>Fri</span>
                {date.date22 ? (
                  <p className="selectedDate">22</p>
                ) : (
                  <p
                    onClick={() => {
                      setsub_date(22);
                      setdate({
                        date1: false,
                        date2: false,
                        date3: false,
                        date4: false,
                        date5: false,
                        date6: false,
                        date7: false,
                        date8: false,
                        date9: false,
                        date10: false,
                        date11: false,
                        date12: false,
                        date13: false,
                        date14: false,
                        date15: false,
                        date16: false,
                        date17: false,
                        date18: false,
                        date19: false,
                        date20: false,
                        date21: false,
                        date22: true,
                      });
                    }}
                  >
                    22
                  </p>
                )}
              </div>
            </div>
          </div>
          {time === "" ? (
            <div className="total_div">
              <div className="clr_time">
                <h3>Time</h3>
                <p>Choose an available time slot</p>
              </div>
              <div className="clr_bt">
                <button
                  onClick={() => {
                    setbreakfast(true);
                    setlunch(false);
                    setdinner(false);
                  }}
                >
                  Breakfast
                </button>
                <button
                  onClick={() => {
                    setbreakfast(false);
                    setlunch(true);
                    setdinner(false);
                  }}
                >
                  Lunch
                </button>
                <button
                  onClick={() => {
                    setbreakfast(false);
                    setlunch(false);
                    setdinner(true);
                  }}
                >
                  Dinner
                </button>
              </div>
              <div className="dish_time">
                {breakfast ? (
                  <div>
                    <button
                      onClick={() => {
                        setTime("7:00 AM");
                      }}
                    >
                      7:00 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("7:15 AM");
                      }}
                    >
                      7:15 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("7:30 AM");
                      }}
                    >
                      7:30 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("7:45 AM");
                      }}
                    >
                      7:45 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("8:00 AM");
                      }}
                    >
                      8:00 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("8:15 AM");
                      }}
                    >
                      8:15 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("8:30 AM");
                      }}
                    >
                      8:30 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("8:45 AM");
                      }}
                    >
                      8:45 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("9:00 AM");
                      }}
                    >
                      9:00 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("9:15 AM");
                      }}
                    >
                      9:15 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("9:30 AM");
                      }}
                    >
                      9:30 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("9:45 AM");
                      }}
                    >
                      9:45 AM
                    </button>
                    <button
                      onClick={() => {
                        setTime("10:00 AM");
                      }}
                    >
                      10:00 AM
                    </button>
                  </div>
                ) : (
                  ""
                )}
                {lunch ? (
                  <div>
                    <button
                      onClick={() => {
                        setTime("12:30 PM");
                      }}
                    >
                      12:30 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("12:45 PM");
                      }}
                    >
                      12:45 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("1:00 PM");
                      }}
                    >
                      1:00 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("1:15 PM");
                      }}
                    >
                      1:15 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("1:30 PM");
                      }}
                    >
                      1:30 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("1:45 PM");
                      }}
                    >
                      1:45 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("2:00 PM");
                      }}
                    >
                      2:00 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("2:15 PM");
                      }}
                    >
                      2:15 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("2:30 PM");
                      }}
                    >
                      2:30 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("2:45 PM");
                      }}
                    >
                      2:45 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("3:00 PM");
                      }}
                    >
                      3:00 PM
                    </button>
                  </div>
                ) : (
                  ""
                )}
                {dinner ? (
                  <div>
                    <button
                      onClick={() => {
                        setTime("7:00 PM");
                      }}
                    >
                      7:00 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("7:15 PM");
                      }}
                    >
                      7:15 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("7:30 PM");
                      }}
                    >
                      7:30 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("7:45 PM");
                      }}
                    >
                      7:45 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("8:00 PM");
                      }}
                    >
                      8:00 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("8:15 PM");
                      }}
                    >
                      8:15 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("8:30 PM");
                      }}
                    >
                      8:30 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("8:45 PM");
                      }}
                    >
                      8:45 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("9:00 PM");
                      }}
                    >
                      9:00 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("9:15 PM");
                      }}
                    >
                      9:15 PM
                    </button>
                    <button
                      onClick={() => {
                        setTime("9:30 PM");
                      }}
                    >
                      9:30 PM
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            <div className="clr_subdata">
              <h3>
                2023-02-{sub_date} | {time}
              </h3>
              <p>Select Guests</p>
              <p className="select_gt">Choose the numbet of guests going</p>
              <div>
                <h3>Guests :</h3>
                <button
                  disabled={guest === 0}
                  onClick={() => {
                    setguest(guest - 1);
                  }}
                >
                  -
                </button>
                <p>{guest}</p>
                <button
                  disabled={guest === 4}
                  onClick={() => {
                    setguest(guest + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          )}
          <div className="detail">
            <p>Enter Guest Details</p>
            <input
              type="text"
              placeholder="Guest Name"
              onChange={(e) => setdetails({ ...details, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Mobile No."
              onChange={(e) =>
                setdetails({ ...details, number: e.target.value })
              }
            />
            {email.email ? (
              <input type="text" placeholder="Email Id" />
            ) : (
              <div className="detail_bt">
                <button
                  onClick={() => {
                    setemail({ ...email, email: true });
                  }}
                >
                  +
                </button>
                <p>Email Address (Optional)</p>
              </div>
            )}

            {email.Optional ? (
              <input type="text" placeholder="Special Request (Optional)" />
            ) : (
              <div className="detail_bt">
                <button
                  onClick={() => {
                    setemail({ ...email, Optional: true });
                  }}
                >
                  +
                </button>
                <p>Any special request (Optional)</p>
              </div>
            )}
          </div>
          {guest !== 0 ? (
            <div className="clr_sub">
              <button
                disabled={details.number === "" && details.name === ""}
                onClick={() => {
                  // console.log(details.name, details.number);
                  setpayment(true);
                }}
              >
                Continue
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <></>
    </div>
  ) : (
    <div style={{ marginTop: "0px", marginBottom: "30px" }}>
      <>
      <Navbar/>
        <div
          style={{
            width: "50%",
            margin: "auto",
            height: "600px",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <div className="rest_name">{arr["resName"]}</div>
          <div className="details_box1">
            <div style={{ fontSize: "28px" }}>Guest Details</div>
            <br />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <p>Guest Name</p>
                <p>Phone No</p>
                <p>Email Id</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <p>{details.name}</p>
                <p>{details.number}</p>
                <p>{}</p>
              </div>
            </div>
          </div>
          <div className="details_box2">
            <div style={{ fontSize: "28px" }}>Booking Summary</div>
            <br />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <p>Table Status - Confirmed</p>
                <p>Date & Time</p>
                <p>Guest Count</p>
                <p>Booking Id</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Your Reservation is Confirmed.Happy Dining!
                </p>
                <p
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  2023/2/{sub_date} &{time}
                </p>
                <p
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  {guest}
                </p>
                <p
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  22434A99Uj05
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="back_home">
          <Link to="/" state={{ backgroundColor: "white" }}>
          <button style={{ background: "rgb(241,89,49)",borderRadius:"3px", marginTop: "20px", width: "220px",height:"41px",textAlign:"center",fontWeight:"bold",color:"white"}}>Go to Home</button>
          </Link>
        </div>
      </>
    </div>
  );
};

export default RestaurentPage;
