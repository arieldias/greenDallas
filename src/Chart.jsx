import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {  
  constructor() {
    super();
    this.state = {pageviews: []}
  }  
  componentDidMount() {
    this.loadData()
    this.render();
  }
  
  loadData() {
		fetch('http://dev.4all.com:3050/pageViews')
			.then(response => response.json())
			.then(data => {
        this.setState({pageviews:data})
        
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }

  render(){ 
    console.log(this.state)
    return(
      <div className="chart">
        <Line 
          data = {this.state.pageViews}
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

