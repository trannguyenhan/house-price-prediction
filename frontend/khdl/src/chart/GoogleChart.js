import React, { Component } from "react";
import Chart from "react-google-charts";

const data = [
  ['Year', 'Visitations', { role: 'style' } ],
  ['2010', 10, 'color: gray'],
  ['2020', 14, 'color: #76A7FA'],
  ['2030', 16, 'opacity: 0.2'],
  ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
  ['2050', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
];

class GoogleChart extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
      return (
          <div className="container mt-5">
              <h2>Google Column Chart in React Js</h2>

              <Chart
                  width={700}
                  height={320}
                  data={data}
                  chartType="ColumnChart"
                  loader={<div>Loading Chart...</div>}                
              />
          </div>
      )
  }
}


export default GoogleChart;