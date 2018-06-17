import React from 'react';
import {robots} from './robots';
import CardList from './CardList';
import Header from './Header';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){

		this.setState({robots: robots});
	}

	onSearchChange = (event) =>{
		//console.log(event.target.value);
		this.setState({searchfield: event.target.value})
	}


	render(){
	 const {robots,searchfield} = this.state;
	 const filteredRobots = robots.filter(robots =>{
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	return !robots.length ? 
	<h1>Loading</h1> :
	(
	 <div>
	  <Header />
	  <SearchBox searchChange={this.onSearchChange}/>
	  <Scroll>
       <CardList robots={filteredRobots} />
      </Scroll>
     </div>

  );
 }
}

export default App;