
import React, {PureComponent, PropTypes} from 'react'

export default class View extends PureComponent{

	static propTypes = {
		number: PropTypes.number.isRequired,
	}

	render () {
		return (
			<div className="module module-a">

				<h1 className="title">MODULE A</h1>

				<div className="content">
					<div className="block">
						<div className="buttons">
							<button>INCREMENT</button>
							<button>DECREMENT</button>
						</div>
						<label className="number">{this.props.number}</label>
					</div>
				</div>

			</div>
		)
	}

}