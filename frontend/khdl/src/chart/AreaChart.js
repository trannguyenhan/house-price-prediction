import React from 'react';
import Chart from "react-google-charts";

export default function AreaChart (){
    const area = [
        ['Area', 'Price', { role: 'style' } ],
        [
            "20-30",
            3.007509417040359,
            'color: #8a2be2'
        ],
        [
            "30-40",
            3.7050521728748955,
            'color: #6495ed'
        ],
        [
            "40-50",
            5.227358419774866,
            'color: #e9967a'
        ],
        [
            "50-60",
            6.502111051859757,
            'color: #696969'
        ],
        [
            "60-70",
            7.5126292472311045,
            'color: #ff00ff'
        ],
        [
            "70-80",
            8.020262459662977,
            'color: #adff2f'
        ],
        [
            "80-90",
            8.342098896044151,
            'color: #f0e68c'
        ],
        [
            "90-100",
            8.677967894239837,
            'color: #f08080'
        ],
        [
            "100-200",
            9.148537878787863,
            'color: #d3d3d3'
        ]
    ];

    var options = {
        title: "Giá nhà theo diện tích",
        hAxis: {
          title: "Diện tích (m2)",
        },
        vAxis: {
          title: "Giá nhà (tỷ đồng)",
        },
    
      };

    return (
        <div className="container mt-5">
            <h2>Giá nhà theo diện tích</h2>

            <Chart
                width={700}
                height={320}
                data={area}
                options={options}
                chartType="ColumnChart"
                loader={<div>Loading Chart...</div>}                
            />
        </div>
    ); 
} 