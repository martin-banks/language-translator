import React from 'react'

import Nav from '../components/nav'



class myComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			languages: null
		}
	}

	componentDidMount() {
		this.setState({ languages: <h1>Hi there</h1> })
	}
	render() {
		return <div className="app">
			<p>something</p>
			{ this.state.languages }
		</div>
	}
}

export default myComponent
