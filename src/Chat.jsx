import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';



class Chart extends Component {  
  constructor(props) {
    super(props);
    this.state = { 
      messages : [],
      newMessage : "",
      chatMessageClass : "chat__newMessage"
    }

    this.loadData     = this.loadData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage  = this.sendMessage.bind(this);
    this.addMessage   = this.addMessage.bind(this);
    this.renderImage  = this.renderImage.bind(this);
    
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
  renderImage (portrait) {
    if (portrait) {
      return(
        <img src={portrait} />
      )
    } else {
      return (
        <div className="chat__element__image__noPortrait"></div>
      )
    }
  }

  getStructuredMessage (item) {
    if (item.displayPortraitLeft) {
      return (
        <li className="chat__element row">
          <div className="chat__element__image col-xs-4 col-sm-2">
            {this.renderImage(item.portrait) }
            
          </div>
          <div className="chat__element__info col-xs-8 col-sm-10">
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
          <div className="chat__element__info col-sm-10 col-xs-8">
              <div className="chat__element__info__meta">
                  <span className="chat__element__info__meta__userName"> {item.userName} </span>
                  <span className="chat__element__info__meta__time"> {item.time} </span>
                  
              </div>
              <div className="chat__element__info__message">
                 {item.message}
              </div>
          </div>
          <div className="chat__element__image col-sm-2 col-xs-4">
             <img src={item.portrait} />
          </div>
          
        </li>  
      )
    }    
  }

  handleChange(event) {
    this.setState ({newMessage : event.target.value });   
    this.setState ({chatMessageClass : "chat__newMessage"})
  }

  handleSubmit (event){
    event.preventDefault();
    this.sendMessage();  
  }

  addMessage (newEntry) {
    var updatedMessages = this.state.messages;
    updatedMessages[updatedMessages.length] = newEntry;

   this.setState({messages : updatedMessages});
   this.setState({newMessage : ""})
  }

  sendMessage() {
    
    if (this.state.newMessage != "") {
      var newEntry = {
        userName: 'Eu',
        time: '1 min ago',
        message: this.state.newMessage,
        portrait: null,
        displayPortraitLeft: true
      }

      fetch('http://dev.4all.com:3050/messages', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry)
      }).then(res => {
        console.log(res);
        this.addMessage(newEntry);
      })
    } else {
      this.setState({chatMessageClass: "chat__newMessage chat__newMessage--msgError"})
    }
  }

  render(){ 
    
    return(      
      <div className="chat__wrapper">
        <div className="headerBlock "> 
          <i className="far fa-comments"></i>
          <h2 className="h2"> Chat </h2>
        </div>
        <div className="chat">
          <ul>
            { this.state.messages.map((item, i) => {              
                return (
                  this.getStructuredMessage(item)
                )          
              })
            } 
          </ul>
        </div>
        <div className={this.state.chatMessageClass}>
          <form method="#"  className="chat__newMessage__form" onSubmit={this.handleSubmit}>
           <input type="text" placeholder="Type your message here" className="inputText" onChange={this.handleChange} value={this.state.newMessage}/>
           <a  onClick={this.handleSubmit} className="btn btn--green --noLeftRadius hoverBounceRight">Send </a>
          </form>
          <p className="error">The entry cannot be empty</p>
        </div>
      </div>
    )
  }  
}
export default Chart;

