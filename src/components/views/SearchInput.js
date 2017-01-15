import React, { Component } from 'react'

class SearchInput extends Component {
	constructor(){
		super()
		this.state = {
			restaurantName: null
		}
	}

	updateSearch(event) {
		this.setState({
			restaurantName: event.target.value
		})
	}

	submitSearch(event) {
		event.preventDefault()
		this.props.onUpdate(this.state.restaurantName)
	}

	inputActive(event) {
		this.props.onFocus(true)
	}

	render(){

		let placeholderText = (this.props.invalidSearchTerm == null) ? 'Restaurant' : this.props.invalidSearchTerm

		return(
			<div>
				<div className="header-intro row clearfix">	
					<div className="col-xs-1 icon-container">
						<span className="icon-restaurant-cutlery"></span>
					</div>

					<div className="col-xs-10 col-sm-11 header-text-container">
						<h1 className="app-title">A'OK?</h1>
						<div className="app-description">Search for a Restaurant's NYC Inspection Grade. Know Before You Go.</div>
					</div>
				</div>

				<form role="search" className="search-form">
					<div className="form-group">
						<input type="search" className="form-control" onChange={this.updateSearch.bind(this)} onFocus={this.inputActive.bind(this)} placeholder={placeholderText} />
						<span className="icon-search" onClick={this.submitSearch.bind(this)}></span>
						<input type="submit" className="hidden" name="commit" value="Search" onClick={this.submitSearch.bind(this)}></input>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchInput
