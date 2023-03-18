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
                style={{ width: "120px", backgroundColor: "white" }}
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
                marginTop:  "10px",
              }}
            >
              Find the best Restaurants, Deals, Discounts & Offers
            </div>
            <br />
            <div
              style={{
                fontSize: "15px",
                textAlign: "center",
                color: "rgb(102,102,102)",
                backgroundColor: "white",
                marginTop:  "-10px",
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
                "data:image/png;base64,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",
                
                "data:image/png;base64,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",

                
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
                fontSize: "13px",
                textAlign: "center",
                backgroundColor: "white",
                marginTop:  "20px"
              }}
            >
                &copy; 2017, dineout.co.in. All Rights Reserved.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Footer;
