import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ProductPriceHistory(props) {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Price History",
    },
    yAxis: {
      title: {
        text: "Eur",
      },
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value:%Y-%m-%d %H:%M:%S}",
        rotation: 45,
        align: "left",
      },
    },
    tooltip: {
      xDateFormat: "%Y-%m-%d %H:%M:%S",
    },
    series: [
      {
        data: (() => {
          return props.product.priceHistory.splice(-5).map(function (point) {
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
