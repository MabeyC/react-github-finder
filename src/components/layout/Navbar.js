import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon.png'

const Navbar = () => {
	const title = 'Github Search';
	const icon = Icon;

		return (
			<nav className="navbar bg-navbar">
				<h1>
				<img src={icon} alt="icon-image" className="icon-image" />
				{" " + title}
				</h1>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		)
}

export default Navbar