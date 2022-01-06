import React from "react";
import Chart from "react-google-charts";

export default function CityChart() {
  const data = [
    ["City", "Price", { role: "style" }],
    ["Hà Nội", 5.8926748656013395,'color: #dc143c'],
    ["Hồ Chí Minh", 6.268173221129792, 'color: #8fbc8f']
  ];

  var options = {
    title: "Giá nhà theo Thành phố",
    hAxis: {
      title: "Thành phố",
    },
    vAxis: {
      title: "Giá nhà (tỷ đồng)",
    },
  };

  return (
    <div className="container mt-5">
      <h2>Giá nhà theo Thành phố</h2>

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
