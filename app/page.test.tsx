import {render} from '@testing-library/react'
import Page from './page';

describe('Page', () => {
    it('Renderiza o Page', () => {
        render(<Page/>);
    });
});