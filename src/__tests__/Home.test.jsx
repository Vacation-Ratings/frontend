import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from '../components/Home.jsx';

describe('Tests the Home component', () => {
    it('Should render city input field', () => {
        render(
            <Home />
        );
        let formElem = screen.getByTestId('home');
        expect(formElem).toBeInTheDocument();
    });
});
