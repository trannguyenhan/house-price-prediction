import React from "react";
import Chart from "react-google-charts";

export default function DistrictChart() {
  const data = [
    ["City", "Price", { role: "style" }],
    ["Nội Thành", 6.473276745786016,'color: #00ffff'],
    ["Ngoại Thành", 4.666573240832481, 'color: #ff1493']
  ];

  var options = {
    title: "Giá nhà theo khu vực",
    hAxis: {
      title: "Khu vực",
    },
    vAxis: {
      title: "Giá nhà (tỷ đồng)",
    },
  };

  return (
    <div className="container mt-5">
      <h2>Giá nhà theo khu vực</h2>

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
