import React, { Component } from 'react';

class ShowList extends React.Component{

	render(){
		//will receive  properties from its parent component
		const userNewList = this.props.userList.map(item => {
			return (
					<div className="col-md-12" key={item.id}>
						<p>
							<span>First Name: {item.name}</span>
							<br/>
							<span>Last Name: {item.lastName}</span>
						</p>
					</div>
				)
		})
		return (
				<div>
					{userNewList}
				</div>
			)
	}
}
export default ShowList;