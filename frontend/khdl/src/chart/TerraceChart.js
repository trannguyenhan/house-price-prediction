import React from "react";
import Chart from "react-google-charts";

export default function TerraceChart() {
  const data = [
    ["Terrace", "Price", { role: "style" }],
    ["True", 6.091888668619076,'color: #f0e68c'],
    ["False", 5.897695844385446, 'color: #cd5c5c']
  ];

  var options = {
    title: "Giá nhà theo sân thượng",
    hAxis: {
      title: "Sân thượng",
    },
    vAxis: {
      title: "Giá nhà (tỷ đồng)",
    },
  };

  return (
    <div className="container mt-5">
      <h2>Giá nhà theo sân thượng</h2>

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
