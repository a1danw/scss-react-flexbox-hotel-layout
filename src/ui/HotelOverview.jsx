import React from "react";
import OverviewHeading from "./OverviewHeading";
import HotelDetails from "./HotelDetails";
import HotelReviews from "./HotelReviews";
import BookNow from "./BookNow";
const HotelOverview = () => (
  <>
    <OverviewHeading />
    <div className="detail">
      <HotelDetails />
      <HotelReviews />
      <BookNow />
    </div>
  </>
);

export default HotelOverview;
