import React, { Component } from 'react'
import DateHelper from '../../../utils/DateHelper'

class SearchResult extends Component {
	componentDidUpdate(){
		console.log('SearchResult componentDidUpdate')
	}
	
	closeInfo(event){
		this.props.onUpdate(null)
	}

	render(){
		let formattedDate = DateHelper.formatDate(this.props.currentRestaurant.date)
		let grade = (this.props.currentRestaurant.grade == 'Z') ? 'PENDING' : this.props.currentRestaurant.grade
		
		return(
			<div className="search-result">
				<button onClick={this.closeInfo.bind(this)} type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h2 className="restaurant-name">{this.props.currentRestaurant.name}</h2>
				<h3 className="grade-info">Grade: {grade}</h3>
				<h4>This restaurant was last inspection on: {formattedDate}</h4>
			</div>
		)
	}
}

export default SearchResult