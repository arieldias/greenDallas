import React, {Component} from 'react';
import JSONHandler from './jsonHandler.jsx';
class NavBar extends Component {     

  render(){ 
    const totalComments = this.props.siteData.comments;
    const totalNewUsers = this.props.siteData.newUsers;
    const totalNewOrders = this.props.siteData.newOrders;
    const totalPageViews = this.props.siteData.pageViews;

  

        return (
      <div className="nav row">
        <div className="nav__element col-sm-3" > 
          <div className="nav__element__icon col-sm-4 nav__element__icon--blue">
            <i className="fas fa-shopping-bag "></i>
          </div>
          <div className="nav__element__info col-sm-8">
            <span className="nav__element__info__number"> {totalNewOrders}</span>
            <span className="nav__element__info__name"> New Orders </span>
          </div>
        </div>

        <div className="nav__element col-sm-3"> 
          <div className="nav__element__icon col-sm-4 nav__element__icon--yellow">
            <i className="far fa-comment"></i>
          </div>
          <div className="nav__element__info col-sm-8">
            <span className="nav__element__info__number"> {totalComments} </span>
            <span className="nav__element__info__name"> Comments </span>
          </div>
        </div>

        <div className="nav__element col-sm-3"> 
          <div className="nav__element__icon col-sm-4 nav__element__icon--red">
            <i className="far fa-user"></i>
          </div>
          <div className="nav__element__info col-sm-8">
            <span className="nav__element__info__number">{totalNewUsers} </span>
            <span className="nav__element__info__name"> New Users </span>
          </div>
        </div>

        <div className="nav__element col-sm-3"> 
          <div className="nav__element__icon col-sm-4  nav__element__icon--green">
            <i className="far fa-newspaper"></i>
          </div>
          <div className="nav__element__info col-sm-8">
            <span className="nav__element__info__number"> {totalPageViews > 1000 ? (totalPageViews / 1000).toFixed(2) + "K" : totalPageViews } </span>
            <span className="nav__element__info__name"> Page Views </span>
          </div>
        </div>
      </div>
    )
  }  
}
export default NavBar;

