import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AddReview from '../components/AddReview.jsx';

describe('Tests the AddReview form component', () => {
    it('Should render city input field', () => {
        render(
            <AddReview />
        );
        let formElem = screen.getByTestId('city');
        expect(formElem).toBeInTheDocument();
    });
    it('Should render country input field', () => {
        render(
            <AddReview />
        );
        let formElem = screen.getByTestId('country');
        expect(formElem).toBeInTheDocument();
    });
    it('Should render review input field', () => {
        render(
            <AddReview />
        );
        let formElem = screen.getByTestId('review');
        expect(formElem).toBeInTheDocument();
    });
    it('Should render expenses input field', () => {
        render(
            <AddReview />
        );
        let formElem = screen.getByTestId('expenses');
        expect(formElem).toBeInTheDocument();
    });
    it('Should render duration input field', () => {
        render(
            <AddReview />
        );
        let formElem = screen.getByTestId('duration');
        expect(formElem).toBeInTheDocument();
    });
});
