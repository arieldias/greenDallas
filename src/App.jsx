import React, {Component} from 'react';
import PageTitle from './PageTitle.jsx';
import NavBar from './NavBar.jsx';
import Chart from './Chart.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}    
  }

  componentDidMount(){
    this.loadData('widgets', this.setGeneralNumbers)
    
  }
  
  loadData(which, handler) {
		fetch('http://dev.4all.com:3050/widgets')
			.then(response => response.json())
			.then(data => {
        this.setState({data:data})
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }
  
  render() {
    const pageTitle = this.props.pageTitle;
    return (
      <div className="app">
        <PageTitle pageTitle = {pageTitle}/>
        <NavBar siteData={this.state.data} />
        <Chart />
      </div>
    );
  }
}
export default App;
