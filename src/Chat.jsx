import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {  
  constructor(props) {
    super(props);
    this.state = { 
      messages : [],
      newMessage : ""
    }

    this.loadData     = this.loadData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage  = this.sendMessage.bind(this);
    this.addMessage   = this.addMessage.bind(this);
    
  }  
  componentDidMount() {
    this.loadData()
  }


  loadData() {
    fetch('http://dev.4all.com:3050/messages')
			.then(response => response.json())
			.then(data => {
        this.setState({ messages : data });        
		})
			.catch(err => console.error(this.props.url, err.toString()));
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

  handleChange(event) {
    this.setState ({newMessage : event.target.value });   
  }

  handleSubmit (event){
    event.preventDefault();
    this.sendMessage();  
  }

  addMessage () {
    var newEntry = {
      userName: "Eu",
      portrait: "",
      displayPortraitLeft: true,
      time: "1 minute ago",
      message : this.state.newMessage
    }
   
    var updatedMessages = this.state.messages;
    updatedMessages[updatedMessages.length] = newEntry;

   this.setState({messages : updatedMessages});
   
   
  }

  sendMessage() {
    fetch('http://dev.4all.com:3050/messages', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: 'Eu',
        time: '1 min ago',
        message: this.state.newMessage,
        portrait: null,
        displayPortraitLeft: true
      })
    }).then(res => {
      console.log(res);
      this.addMessage();
    })
  }

  render(){ 
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
          <form method="#" onSubmit={this.handleSubmit} className="chat__newMessage__form">
           <input type="text" placeholder="Type your message here" className="inputText" onChange={this.handleChange} value={this.state.newMessage}/>
           <input type="submit" value="Send" className="btn btn--green --noLeftRadius"/>
          </form>
        </div>
      </div>
    )
  }  
}
export default Chart;

