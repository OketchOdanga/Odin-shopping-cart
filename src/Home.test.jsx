import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './Home';
import { describe, it } from 'vitest';

describe('Home', () => {
    it('renders Home componet', () => {
        render(<Home/>);

        screen.debug();
    })
})