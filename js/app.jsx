var React = require('react');
var Header = require('./components/Header.jsx');
var Subheader = require('./components/Subheader.jsx');
var Mainbody = require('./components/Mainbody.jsx');

var App = React.createClass({
	render: function() {
		return (
			<main>
				<Header />
				<Subheader />
				<Mainbody />
			</main>
		)
	}
});

React.render(<App/>, document.body);
