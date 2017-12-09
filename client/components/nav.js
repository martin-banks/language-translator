import React from 'react'

class Nav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return <section>
			<p>{ this.props.title }</p>
		</section>
	}
}

export default Nav
