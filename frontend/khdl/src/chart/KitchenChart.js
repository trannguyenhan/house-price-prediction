import React from "react";
import Chart from "react-google-charts";

export default function KitchenRoomChart() {
  const data = [
    ["Kitchen", "Price", { role: "style" }],
    ["True", 6.026180164018399, 'color: #ff1493'],
    ["False", 5.995552776834238, 'color: #daa520']
  ];

  var options = {
    title: "Giá nhà theo nhà bếp",
    hAxis: {
      title: "Nhà bếp",
    },
    vAxis: {
      title: "Giá nhà (tỷ đồng)",
    },
  };

  return (
    <div className="container mt-5">
      <h2>Giá nhà theo nhà bếp</h2>

      <Chart
        width={700}
        height={320}
        data={data}
        options={options}
        chartType="ColumnChart"
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
}
