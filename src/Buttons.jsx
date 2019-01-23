import React, {Component} from 'react';

class Buttons extends Component {  
  render(){ 
    const text = this.props.text;
    return (
      <div>
        <input type="submit" className="btn btn__primary" value={text}/>
        <a className="btn btn__primary"> send in anchor </a>

        <input type="submit" className="btn btn__secondary" value={text}/>
        <a className="btn btn__secondary"> send in anchor </a>

        <input type="submit" className="btn btn__tertiary" value={text}/>
        <a className="btn btn__tertiary"> send in anchor </a>

      </div>
    )
  }  
}
export default Buttons;

