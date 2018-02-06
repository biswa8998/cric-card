import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

class Menu extends Component{
	render(){
		return(
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#home">CricCard</a>
					</Navbar.Brand>
				<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Text>
						
					</Navbar.Text>
					<Navbar.Text pullRight>Have a great day!</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Menu;