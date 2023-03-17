import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer_outer">
        <div className="Footer_inner">
          <table>
            <tr>
              {["Available in"].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
            <br />
            <tr>
              {["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"].map(
                (item) => (
                  <td>{item}</td>
                )
              )}
            </tr>
            <tr>
              {["Pune", "Kolkata", "Ahmedabad", "Chandigarh", "Goa"].map(
                (item) => (
                  <td>{item}</td>
                )
              )}
            </tr>
            <tr>
              {["Jaipur", "Lucknow", "Indore", "Udaipur", "Agra"].map(
                (item) => (
                  <td>{item}</td>
                )
              )}
            </tr>
            <tr>
              {["Vadodara", "Nagpur", "Kochi", "Surat", "Ludiana"].map(
                (item) => (
                  <td>{item}</td>
                )
              )}
            </tr>
          </table>
        </div>
        <div>
          <hr />
        </div>
        <div className="Footer_inner">
          <table>
            <tr>
              {[
                "Discover",
                "About",
                "Top Cuisines",
                "Top Facilities",
                "Top Locations",
              ].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
            <br />
            <tr>
              {[
                "Trending Restaurants",
                "About us",
                "Chinese",
                "Romantic",
                "Koramangala",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[
                "Super Savers",
                "Blog",
                "Italian",
                "Fine Dining",
                "Indiranagar",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[
                "Dineout Pay",
                "Add Restaurant",
                "North Indian",
                "Fine Dining",
                "Jayanagar",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[
                "Dineout Passport",
                "Terms and conditions",
                "Kerala",
                "5 star",
                "White Field",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[
                "Contactless Dining",
                "Privacy and Policy",
                "Bengali",
                "Pure Veg",
                "Marathahalli",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[" ", " ", "Thai", "Sea Food", "HSR Layout"].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          </table>
        </div>
        <div>
          <hr />
        </div>
        <div className="Footer_inner">
          <div className="Footer_box">
            <div
              style={{
                margin: "auto",
                width: "fit-content",
                backgroundColor: "white",
              }}
            >
              <img
                style={{ width: "130px", backgroundColor: "white" }}
                src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                alt="logo"
              />
            </div>
            <div
              style={{
                fontSize: "12px",
                textAlign: "center",
                color: "gray",
                backgroundColor: "white",
              }}
            >
              Find the best Restaurants, Deals, Discounts & Offers
            </div>
            <br />
            <div
              style={{
                fontSize: "15px",
                textAlign: "center",
                color: "gray",
                backgroundColor: "white",
              }}
            >
              Contact: <b>+91-9212340202</b>
            </div>
            <div
              className="foot_img"
              style={{
                width: "fit-content",
                margin: "auto",
                marginTop: "10px",
              }}
            >
              {[
                "https://1.bp.blogspot.com/-qdRfUNOtjkM/XeI_00z9pzI/AAAAAAAAF4E/FeD2SvVFnKUjPAKQ_cNM6-D2ahjKb0HkQCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340-2.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png",
                "data:image/jpeg;base64,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",
                "data:image/jpeg;base64,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",
              ].map((item, ind) => (
                <img
                  key={ind}
                  style={{ height: "30px", width: "30px", marginRight: "10px" }}
                  src={item}
                  alt="imm"
                />
              ))}
            </div>
            <p
              style={{
                color: "gray",
                fontSize: "12px",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              <b style={{ backgroundColor: "white" }}>
                &copy; 2017, dineout.co.in. All Rights Reserved.
              </b>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Footer;
