import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {  
  constructor(props) {
    super(props);
    this.state = { 
      messages : []
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
        __this.setState({messages : data})
        console.log(__this.state.messages)
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }

  render(){ 
    console.log(this.state.messages);

    return(
      <div className="chatWarpper">
        <div className="header-block "> 
          <h2> Chat </h2>
        </div>
        <div className="chat">
          <ul>
            { this.state.messages.map((item, i) => {
              var cls ="chat__message"
              cls += item.displayPortraitLeft ==  true ? " --left" : " --right";
              return <li className={cls}>
                <img src={item.portrait} />
                <span>{item.userName}</span>
                <span>{item.time}</span>
              </li>
              })
            } 
          </ul>
        </div>
      </div>
    )
  }  
}
export default Chart;

