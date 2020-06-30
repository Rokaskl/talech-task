import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ProductPriceHistory(props) {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Quantity History",
    },
    yAxis: {
      title: {
        text: "Units",
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
          return props.product.quantityHistory.splice(-5).map(function (point) {
            return [Date.parse(point[0]), point[1]];
          });
        })(),
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
