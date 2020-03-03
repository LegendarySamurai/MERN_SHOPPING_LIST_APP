import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

const AppNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="app-navbar">
			<Navbar
				color="dark"
				dark expand="sm"
				className="mb-5"
			>
				<Container>
					<NavbarBrand href="/">
						ShoppingList
					</NavbarBrand>
					<NavbarToggler onClick={ () => toggle() }>

					</NavbarToggler>
					<Collapse isOpen={ isOpen } navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink
									href="https://www.google.com.ua/?hl=ru"
									target="_blank"
								>Link (Google)</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default AppNavbar;
