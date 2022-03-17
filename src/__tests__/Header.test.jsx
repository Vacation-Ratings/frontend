import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../components/Header.jsx';

describe('Tests the Header component', () => {
    it('Should render navLink1', () => {
        render(
            <Header />
        );
        let formElem = screen.getByTestId('navLink1');
        expect(formElem).toBeInTheDocument();
    });
    it('Should render navLink2', () => {
        render(
            <Header />
        );
        let formElem = screen.getByTestId('navLink2');
        expect(formElem).toBeInTheDocument();
    });
});
