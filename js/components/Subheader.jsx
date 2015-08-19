var React = require('react');

var Subheader = React.createClass({
	render: function() {
		return (
			<table>
				<tr>
					<button>All Latest Deals</button>
					<button>Popular Deals</button>
					<button>Freebies</button>
					<button>Stores and Coupons</button>
					<button>Send a Deal</button>
				</tr>
			</table>
		)
	}
})

module.exports = Subheader;
