import React from "react";
import "./features.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Features() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureCont">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -12.7
            <KeyboardArrowDownIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureCont">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -3.5
            <KeyboardArrowDownIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureCont">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            +17.7
            <KeyboardArrowUpIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
  );
}
