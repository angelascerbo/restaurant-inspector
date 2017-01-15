import React, { Component } from 'react'
import Search from '../containers/Search'

class Home extends Component {
	render(){
		return(
			<div className="app-container col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
				<Search />
			</div>
		)
	}
}

export default Home
