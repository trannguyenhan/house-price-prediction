import React from "react";
import Chart from "react-google-charts";

export default function FloorNumberChart() {

  const data = [
    ["floor number", "price"],
    ["1", 4.8895197685631695],
    ["2", 5.362320051690754],
    ["3", 6.135152503356978],
    ["4", 5.746907660610621],
    ["5", 5.928590327272727],
    ["6", 8.4151432015429],
    ["7", 10.671123613312213],
    ["8", 12.094123711340208],
  ];

  var options = {
    title: "Giá nhà theo số tầng",
    hAxis: {
      title: "Số  tầng",
    },
    vAxis: {
      title: "Giá nhà (tỷ đồng)",
    },
    series: {
      1: { curveType: 'function' },
    },

  };

  return (
    <div className="container mt-5">
      <h2>Giá nhà theo số tầng</h2>

      <Chart
        width={700}
        height={320}
        data={data}
        options={options}
        chartType="AreaChart"
        loader={<div>Loading Chart...</div>}
        rootProps={{ 'data-testid': '2' }}
        
      />
    </div>
  );
}
