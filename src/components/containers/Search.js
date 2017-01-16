import React, { Component } from 'react'
import { SearchInput, SearchResult } from '../views'
import APIManager from '../../../utils/APIManager'

class Search extends Component {
	constructor(){
		super()
		this.state = {
			restaurantInfo: null,
			isResult: null,
			isSearching: false,
			invalidSearchTerm: null
		}
	}


	submitSearch(searchTerm) {
		if(searchTerm == null) {
			this.setState({
				isResult: false
			})

			return
		} else {
			this.setState({
				isSearching: true
			})
		}

		const restaurantName = searchTerm.toUpperCase().toString()

		APIManager.get(restaurantName, (err, response) => {
			if(err){
				return
			}

			let resultsList = response

			if (!resultsList.length) {
				this.setState({
					isResult: false,
					isSearching: false,
					invalidSearchTerm: searchTerm
				})

				return
			}
			
			let grades = []

			resultsList.forEach((result, i) => {
				if (result.grade) {
					let gradeObj = {
						name: result.dba,
						date: result.grade_date,
						grade: result.grade
					}

					//console.log(gradeObj)
					grades.push(gradeObj)
				}
			})

			grades.sort((a, b) => {
				var c = new Date(a.date)
				var d = new Date(b.date)

				return c - d
			})

			let mostRecentGrade = grades.pop();

			this.setState({
				restaurantInfo: mostRecentGrade,
				isResult: true,
				isSearching: false
			})
		})
	}

	inputActive(status){
		if(status == true) {
			$('#errorMessage').fadeOut('slow')
			this.setState({
				isResult: null
			})
		}	
	}

	closeInfo(event){
		this.setState({
			restaurantInfo: null,
			isResult: null,
			isSearching: false,
			invalidSearchTerm: null
		})
	}

	render(){
		let content = null
		let errorMessage = null

		if (this.state.restaurantInfo) {
			content = (
				<div>
					<SearchResult currentRestaurant={this.state.restaurantInfo} onUpdate={this.closeInfo.bind(this)}/>
				</div>
			)
		} else {
			content = (
				<div>
					<SearchInput onUpdate={this.submitSearch.bind(this)} onFocus={this.inputActive.bind(this)} isResult={this.state.isResult} invalidSearchTerm={this.state.invalidSearchTerm}/>
				</div>
			)
		}

		if(this.state.isSearching) {
			content = (
				<div className="loader">
					<div className="bubble-1"></div>
					<div className="bubble-2"></div>
				</div>
			)
		}

		return(
			<div className="search-container">
				{ errorMessage }
				{ content }
			</div>
		)
	}
}

export default Search
