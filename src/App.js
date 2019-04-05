import React, { Component } from 'react';
import './App.css';
import AddForms from './Forms'
import ShowList from './ShowList'
import GetDataApi from './GetDataApi'

//Parent Component
class App extends React.Component {
  //Current state
	  state = {
	 	userList:[
	 		{name:'Deepak', lastName:'Verma', id:1}
	 		
	 	]
	 }

	//This is a function which we will pass as parameter
	addUpdate = (update) => {
		let userList = [...this.state.userList, update];
		this.setState({
			userList: userList
		});
		console.log(userList);
	}

	//Executing the render() method with child components
  render() {		
    return (
		<div className = "col-md-12"> 
			<h3>{this.props.headerText}</h3>
			<hr/>
			<ShowList userList={this.state.userList}/>
			<hr/>
			<br/>
			<AddForms addUpdate={this.addUpdate}/>
			<br/>
			<GetDataApi/>
		</div>
    );
  }
}
export default App;


