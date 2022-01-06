import React from "react";
import Chart from "react-google-charts";

export default function TypeRoomChart() {
  const data = [
    ["Type", "Price", { role: "style" }],
    ["Nhà mặt tiền", 7.946181117083438,'color: #87cefa'],
    ["Nhà trong hẻm", 5.465670903862491, 'color: #ffb6c1']
  ];

  var options = {
    title: "Giá nhà theo vị trí",
    hAxis: {
      title: "Vị trí",
    },
    vAxis: {
      title: "Giá nhà (tỷ đồng)",
    },
  };

  return (
    <div className="container mt-5">
      <h2>Giá nhà theo vị trí</h2>

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
