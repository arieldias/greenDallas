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
        
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }

  getStructuredMessage (item) {
    if (item.displayPortraitLeft) {
      return (
        <li className="chat__element row">
          <div className="chat__element__image col-sm-2">
             <img src={item.portrait} />
          </div>
          <div className="chat__element__info col-sm-10">
              <div className="chat__element__info__meta">
                  <span className="chat__element__info__meta__userName"> {item.userName} </span>
                  <span className="chat__element__info__meta__time"> {item.time} </span>
                  
              </div>
              <div className="chat__element__info__message">
                 {item.message}
              </div>
          </div>
        </li>
      )
      
    } else {
      return (
        <li className="chat__element row">
          <div className="chat__element__info col-sm-10">
              <div className="chat__element__info__meta">
                  <span className="chat__element__info__meta__userName"> {item.userName} </span>
                  <span className="chat__element__info__meta__time"> {item.time} </span>
                  
              </div>
              <div className="chat__element__info__message">
                 {item.message}
              </div>
          </div>
          <div className="chat__element__image col-sm-2">
             <img src={item.portrait} />
          </div>
          
        </li>  
      )
    }    
  }

  render(){ 
    console.log(this.state.messages);
    var __this = this;
    return(      
      <div className="chat__wrapper">
        <div className="header-block "> 
          <i className="far fa-comments"></i>
          <h2> Chat </h2>
        </div>
        <div className="chat">
          <ul>
            { this.state.messages.map((item, i) => {
              
                return (
                  __this.getStructuredMessage(item)
                )
          
              })
            } 
          </ul>
        </div>
        <div className="chat__newMessage">
           <input type="text" placeholder="Type your message here" className="input --noRightRadius"/>
           <input type="submit" value="Send" className="btn btn--green --noLeftRadius"/>
        </div>
      </div>
    )
  }  
}
export default Chart;

