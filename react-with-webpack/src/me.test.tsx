import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Me from './me';

describe('<Me />', () => {
    afterEach(cleanup);
    it('Has Vani!', () => {
        const { getByText } = render(<Me name="Vani" />);
        expect(getByText('Vani')).toBeInTheDocument();
    });
});
