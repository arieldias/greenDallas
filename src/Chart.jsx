import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {  
  constructor(props) {
    super(props);
    console.log("@#!@#!@")
    console.log(this);
    console.log(this.props);
    console.log("@#!@#")
    this.state = {
      chartData: {
        labels : ['Boston', 'Worcester', 'SpringField', 'Lowell', 'Cambridge', 'New Beadford'],
        datasets :[
          {
            label: 'Poplation', 
            data : [
              122345, 
              109412, 
              123412, 
              100010, 
              100558, 
              138845
            ], 
            backgroudColor: [
              'rgba(255,99,132,0.6)',
              'rgba(54,162,135,0.6)',
              'rgba(128,220,95,0.6)',
              'rgba(0,88,88,0.6)',
              'rgba(255,0,123,0.6)',
              'rgba(0,0,0,0.6)',
            ]
          }
        ]
      }
    }
  }  
  render(){ 
    return(
      <div className="chart">
        <Line 
          data = {this.state.chartData}
          options = {{
            display: true,
            text: "Un dos três"
          }}
        />    
      </div>
    )
  }  
}
export default Chart;

