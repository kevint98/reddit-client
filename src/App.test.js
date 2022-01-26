import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	render(<App />);

	it('renders a <Header />  component', () => {
		expect(screen.getByRole('banner')).toBeInTheDocument();
	});
});
