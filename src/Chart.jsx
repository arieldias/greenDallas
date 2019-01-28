import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {  
  constructor(props) {
    super(props);
    this.state = { 
      pageViews: {
        labels : [],
        datasets : [
          {
            label: "pageviews", 
            data : [],
            backgroundColor: "rgba(55,163,220,0.4)",
            borderColor : "rgba(55,163,220,0.6)"
          }
        ]
      }
    }

    this.normalizePageViews = this.normalizePageViews.bind(this);
  }  
  componentDidMount() {
    this.loadData()
  }

  normalizePageViews (data) {
    let months =[];
    let pageviews = []

    for (var i = 0; i < data.length; i++ ) {
      months.push(data[i].month);
      pageviews.push(data[i].views);
    }

    this.setState({
      pageViews :{
        labels : months,
        datasets : [
          {
            label: "pageviews",
            data : pageviews
          }
        ]
      }
    })
  }
  
  loadData() {
   	fetch('http://dev.4all.com:3050/pageViews')
			.then(response => response.json())
			.then(data => {
        this.normalizePageViews(data);       
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }
 
  render(){ 
    return(
      <div className="char__wrapper">
        <div className="headerBlock"> 
            <i className="fas fa-project-diagram"></i>
            <h2 className="h2"> Site Traffic Overview </h2>
        </div>
        <div className="chart">
          <Line 
            data = {this.state.pageViews}          
          />    
        </div>        
      </div>
    )
  }  
}
export default Chart;

