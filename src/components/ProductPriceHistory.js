import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ProductPriceHistory(props) {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Price History",
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value:%Y-%m-%d}",
        rotation: 45,
        align: "left",
      },
    },
    series: [
      {
        data: (() => {
          return props.product.priceHistory.map(function (point) {
            return [Date.parse(point[0]), point[1]];
          });
        })(),
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
