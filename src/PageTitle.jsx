import React, {Component} from 'react';


class PageTitle extends Component {
  render() {
    const pageTitle = this.props.pageTitle;
    return (
      <div className="row">
        <h1 className="col-sm-12"> {pageTitle} </h1>      
      </div>
    );
  }
}
export default PageTitle;
