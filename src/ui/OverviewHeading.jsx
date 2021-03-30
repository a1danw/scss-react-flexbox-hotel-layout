import React from "react";
import { ReactComponent as StarIcon } from "../images/star.svg";
import { ReactComponent as LocationIcon } from "../images/location-pin.svg";

const OverviewHeading = () => (
  <div className="overview">
    <h1 className="overview__heading">Hotel Las Palmas</h1>
    <div className="overview__stars">
      <StarIcon className="overview__icon-star" alt="stars logo" />
      <StarIcon className="overview__icon-star" alt="stars logo" />
      <StarIcon className="overview__icon-star" alt="stars logo" />
      <StarIcon className="overview__icon-star" alt="stars logo" />
      <StarIcon className="overview__icon-star" alt="stars logo" />
    </div>

    <div className="overview__location">
      <LocationIcon className="overview__icon-location" alt="icon location" />
      <button className="btn-inline">Albufeuira, Portugal</button>
    </div>

    <div className="overview__rating">
      <div className="overview__rating-average">8.6</div>
      <div className="overview__rating-count">429 votes</div>
    </div>
  </div>
);

export default OverviewHeading;
