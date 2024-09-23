import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-blue-500 p-4">
			<ul className="flex space-x-4">
				<li>
					<Link to="/day13" className="text-white">
						Day 13
					</Link>
				</li>
				<li>
					<Link to="/day14" className="text-white">
						Day 14
					</Link>
				</li>
				<li>
					<Link to="/day15" className="text-white">
						Day 15
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
