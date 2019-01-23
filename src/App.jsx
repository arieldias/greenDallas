import React, {Component} from 'react';
import PageTitle from './PageTitle.jsx';
import NavBar from './NavBar.jsx';
import Chart from './Chart.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.setGeneralNumbers = this.setGeneralNumbers.bind(this);
    this.setPageViewNumbers = this.setPageViewNumbers.bind(this);
    this.state = {data: []}
    this.loadData('widgets', this.setGeneralNumbers)
    this.loadData('pageViews', this.setPageViewNumbers)
  }

  setGeneralNumbers(data) {
    this.setState({data:data})
  }

  setPageViewNumbers(data) {
    this.setState({pageViews:data})
  }

  loadData(which, handler) {
		fetch('http://dev.4all.com:3050/'+which)
			.then(response => response.json())
			.then(data => {
        handler(data)        
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }
  
  render() {
    const pageTitle = this.props.pageTitle;
    return (
      <div className="app">
        <PageTitle pageTitle = {pageTitle}/>
        <NavBar siteData={this.state.data} />
        <Chart pageViews = {this.state.pageViews} />
      </div>
    );
  }
}
export default App;
