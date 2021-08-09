import React from 'react';
import {
    render,
    fireEvent,
    waitFor,
    cleanup,
    screen,
} from '@testing-library/react';
import App from './app';

describe('<App />', () => {
    afterEach(cleanup);
    it('Has Hello World!', () => {
        render(<App />);
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    });

    it('Has no warn class.', () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId('higherCount').classList).toHaveLength(0);
    });

    it('Increment works', () => {
        const { getByText, getByTestId } = render(<App />);
        fireEvent.click(getByText('+'));
        const elem = getByTestId('higherCount');
        expect(elem.innerHTML).toContain('1');
    });

    it('Decrement works', () => {
        const { getByText, getByTestId } = render(<App />);
        fireEvent.click(getByText('-'));
        const elem = getByTestId('higherCount');
        expect(elem.innerHTML).toContain('-1');
    });

    it('Has warn class.', () => {
        const { getByText, getByTestId } = render(<App />);
        for (let i = 0; i < 12; i += 1) {
            fireEvent.click(getByText('+'));
        }
        const elem = getByTestId('higherCount');
        expect(elem.classList[0]).toBe('warn');
    });

    it('Now with different name.', () => {
        const { getByText, getByTestId } = render(<App />);
        for (let i = 0; i < 12; i += 1) {
            fireEvent.click(getByText('+'));
        }
        const elem = getByTestId('higherCount');
        expect(elem.classList[0]).toBe('warn');
    });

    it('loaded Warning Component', async () => {
        const { getByText } = render(<App />);
        for (let i = 0; i < 12; i += 1) {
            fireEvent.click(getByText('+'));
        }
        const elem = await waitFor(() => getByText('Here is warning!'));
        expect(elem).toBeInTheDocument();
    });
});
