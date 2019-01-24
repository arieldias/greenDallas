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
            data : []
          }
        ]
      }
    }
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
    var __this = this;
		fetch('http://dev.4all.com:3050/pageViews')
			.then(response => response.json())
			.then(data => {
        __this.normalizePageViews(data);       
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }

  render(){ 
    return(
      <div className="chat">
         
      </div>
    )
  }  
}
export default Chart;

