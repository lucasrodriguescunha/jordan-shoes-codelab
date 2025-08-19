import {render} from '@testing-library/react';
import ProductGrid from '@/components/ProductGrid/ProductGrid';

describe('ProductGrid Component', () => {
    it('Renderiza o ProductGrid', () => {
        render(<ProductGrid/>);
    });
});