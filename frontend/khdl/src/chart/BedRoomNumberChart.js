import React from "react";
import Chart from "react-google-charts";

export default function BedRoomNumberChart() {

  const data = [
    ["bedroom number", "price"],
    [2, 4.339593535075667],
    [3, 4.641040768555499],
    [4, 6.2420244682978865],
    [5, 7.564059205020912],
    [6, 7.892405962059626],
    [7, 8.679881386861313],
    [8, 9.640340909090906]
  ];

  var options = {
    title: "Giá nhà theo số phòng ngủ",
    hAxis: {
      title: "Số  phòng ngủ (phòng)",
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
      <h2>Giá nhà theo số phòng ngủ</h2>

      <Chart
        width={700}
        height={320}
        data={data}
        options={options}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        rootProps={{ 'data-testid': '2' }}
        
      />
    </div>
  );
}
