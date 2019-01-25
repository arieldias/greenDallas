import React, {Component} from 'react';


class Modal extends Component {  
  constructor(props) {
    super(props);
    this.state = { 
      state   : "open",
      message : ""
    }
  }  
 

  close (){
    this.setState({state: "closed"})
  }
 
  render(){ 
    var cls = "modal__wrapper" + this.state.message;
    return(
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>One fine body...</Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }  
}
export default Modal;

