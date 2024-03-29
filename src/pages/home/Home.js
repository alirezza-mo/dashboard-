import React, { Component } from "react";
import Features from "../../components/features/Features";
import {xAxisData} from "../../datas";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/widgetSm";
import WidgetLg from "../../components/widgetLg/widgetLg";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Features />
        <Chart grid title="month sale" data={xAxisData} dataKey="sale" />
        {/* <chart grid title="month sale" data={XAxis} dataKey="sale" /> */}
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    );
  }
}
