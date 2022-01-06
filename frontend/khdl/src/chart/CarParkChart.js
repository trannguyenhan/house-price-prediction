import React from 'react';
import Chart from "react-google-charts";

export default function CarParkChart (){
    const data = [
        ['Is CarPark', 'Price', { role: 'style' } ],
        [
            "True",
            6.5710832400589405,
            'color: #8a2be2'
        ],
        [
            "False",
            5.576729366689183,
            'color: #6495ed'
        ]
    ];

    var options = {
        title: "Giá nhà theo bãi đỗ xe",
        hAxis: {
          title: "Bãi đỗ  xe",
        },
        vAxis: {
          title: "Giá nhà (tỷ đồng)",
        },
    
      };

    return (
        <div className="container mt-5">
            <h2>Giá nhà theo bãi đỗ  xe</h2>

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