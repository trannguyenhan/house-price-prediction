import React from "react";
import Chart from "react-google-charts";

export default function DinningRoomChart() {
  const data = [
    ["Dinning Room", "Price", { role: "style" }],
    ["True", 6.013091540241698,'color: #ff1493'],
    ["False", 5.999898963730515, 'color: #daa520']
  ];

  var options = {
    title: "Giá nhà theo phòng ăn",
    hAxis: {
      title: "Phòng ăn",
    },
    vAxis: {
      title: "Giá nhà (tỷ đồng)",
    },
  };

  return (
    <div className="container mt-5">
      <h2>Giá nhà theo Phòng ăn</h2>

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
