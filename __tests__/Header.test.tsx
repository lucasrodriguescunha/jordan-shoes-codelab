import {render} from '@testing-library/react';
import Header from '@/components/Header/Header';

describe('Header Component', () => {
    it('Renderiza o Header', () => {
        render(<Header/>);
    });
});