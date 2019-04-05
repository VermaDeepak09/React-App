import React, {Component} from 'react'

class AddForms extends React.Component{
	state = {
		name:null,
		lastName: null	
	}
	handleChange = (e) => {
		this.setState({
			//Name of the state variable and ID of input type is same i.e. this.state.name = name
			[e.target.id] : e.target.value
		})
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.addUpdate(this.state);
		
	}
	render(){
		return (
				<div className="col-md-12">
					<h3>Add Users to the list</h3>
					<form onSubmit={this.handleSubmit.bind()}>
  						<div className="form-group">
    						<label>First Name : </label>
    						<input onChange={this.handleChange} type="text" className="form-control" placeholder="Enter Name" id="name"/>
  						</div>
					  <div className="form-group">
					    <label>Last Name : </label>
					    <input onChange={this.handleChange} id="lastName" type="text" className="form-control"  placeholder="Last Name"/>
					  </div>
  						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
		)
	}
}
export default AddForms;