var React = require('react');

var Mainbody = React.createClass({
	render: function() {
		var style = {
			width: '400px',
			padding: '20px',
			border: '5px solid black',
			display: 'inline-block'
			//color: 'green'
		};
		var picture = {
			width: '100px',
			height: '100px',
			display: 'inline-block',
			border: '1px dashed blue'
		};
		var title = {
			display: 'inline-block',
			padding: '10px'
		}
		return (
			<div>
				<table>
					<tr>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>LG TV 1080p</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Samsung Galaxy S6</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Dell Desktop</h3>
							<p>At Amazon</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Lenovo Thinkpad</h3>
							<p>At Amazon</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Colgate 6-pack toothbrush</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Mr. Coffee Brewer</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Microsoft Xbox One</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Playstation 4</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>4-Pack Iphone charger</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Tide liquid detergent</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Air Jordan 3 - Infrared</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
						<td style={style}>
							<div style={picture}>A picture</div>
							<h3 style={title}>Nalgene Classic Bottle</h3>
							<p>At ebay</p>
							<ul>
								<li>Free Shipping</li>
							</ul>
						</td>
					</tr>
				</table>
			</div>
		)
	}
});

module.exports = Mainbody;
