import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ProductQuantityHistory() {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Quantity History",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
        name: "Quantity",
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
