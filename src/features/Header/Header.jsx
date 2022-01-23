import React, { useState } from 'react';
import './Header.css';
import { FaReddit } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';

import { Button, ButtonGroup } from 'react-bootstrap';

const Header = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchTermChange = ({ target }) => {
		setSearchTerm(target.value);
	};

	const handleSearchSubmit = e => {
		e.preventDefault();
		console.log(searchTerm);
		setSearchTerm('');
	};

	return (
		<header>
			<div className="logo">
				<FaReddit className="logo-icon" />
				<h1>Reddit Client</h1>
			</div>
			<form className="search" onSubmit={handleSearchSubmit}>
				<div className="">
					<HiOutlineSearch className="search-icon" />
					<input
						type="text"
						placeholder="Search Reddit"
						value={searchTerm}
						aria-label="Search Reddit"
						onChange={handleSearchTermChange}
					/>
				</div>
			</form>
			<div className="theme">
				<ButtonGroup aria-label="Theme Changer">
					<Button variant="light">☼</Button>
					<Button variant="dark">☾</Button>{' '}
				</ButtonGroup>
			</div>
		</header>
	);
};

export default Header;
