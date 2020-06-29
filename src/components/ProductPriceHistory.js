import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ProductPriceHistory() {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Price History",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
        name: "Price",
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
