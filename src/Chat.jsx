import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {  
  constructor(props) {
    super(props);
    this.state = { 
      messages: {
        0 : {
          username : "Roger Doe",
          message: "un dos tres",
          portrait: "http://dev.4all.com:3050/imgs/profile2.png",
          
        }
      }
    }
  }  
  componentDidMount() {
    this.loadData()
  }


  loadData() {
    var __this = this;
		fetch('http://dev.4all.com:3050/messages')
			.then(response => response.json())
			.then(data => {
        console.log(data);
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }

  render(){ 
    return(
      <div className="chatWarpper row">
        <div className="header-block col-sm-8"> 
          <h2> Chat </h2>
        </div>
        <div className="chat col-sm-8">
        </div>
      </div>
    )
  }  
}
export default Chart;

