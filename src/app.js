import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'

class App extends Component {
	render(){
		return(
			<div>
				<Home />
				<footer className="hidden">
					<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
				</footer>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
