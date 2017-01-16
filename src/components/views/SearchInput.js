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
		let toggleSearchError = null

		if (this.props.isResult == false) {
			toggleSearchError = (
				<div id="errorMessage" className="error-message">Oops! Restaurant not found. <br/> Check your spelling and be sure to enter the full business name.</div>
			)
		} else {
			toggleSearchError = (
				<input type="submit" className="btn btn-default hidden-lg" name="commit" value="Search" onClick={this.submitSearch.bind(this)}></input>
			)
		}

		return(
			<div>
				<div className="header-intro clearfix">	
					<div className="icon-container">
						<span className="icon-restaurant-cutlery"></span>
					</div>

					<div className="header-text-container">
						<h1 className="app-title">A'OK?</h1>
						<div className="app-description">Search for a Restaurant's NYC Inspection Grade. Know Before You Go.</div>
					</div>
				</div>

				<form role="search" className="search-form">
					<div className="form-group">
						<div className="form-input-container">
							<input type="search" className="form-control" onChange={this.updateSearch.bind(this)} onFocus={this.inputActive.bind(this)} placeholder={placeholderText} />
							<span className="icon-search" onClick={this.submitSearch.bind(this)}></span>
						</div>
						{ toggleSearchError }
					</div>
				</form>
			</div>
		)
	}
}

export default SearchInput
