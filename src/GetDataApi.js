import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
class GetDataApi extends React.Component{
	state={
		userList:[]
	}
	componentDidMount(){
		//calling the API and getting the response
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res => {
			this.setState({
				userList:res.data.slice(0,10)
			})
		})
	}
	render(){
		
		//Will receive data from state (this,state)
		const getList = this.state.userList.map(post => {
			return (
					<div className="card card-margin" key={post.id}>
					  <div className="card-body">
					    <h5 className="card-title">{post.title}</h5>
					    <p className="card-text">{post.body}</p>
					  </div>
					</div>
				)
		})
		
		return (
				<div>
					{getList}
				</div>
			)
	} 
}
export default GetDataApi;