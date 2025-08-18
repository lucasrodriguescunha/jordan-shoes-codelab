import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import CardProduct from '@/components/CardProduct/CardProduct';

describe('CardProduct Component', () => {
    const mockProps = {
        image: '/air-jordan-1-mid-dutch-green-1-400.svg',
        title: 'Air Jordan 1 Mid Dutch Green',
        description: 'Tênis Air Jordan',
        price: 119999 / 100
    };

    test('Renderiza o CardProduct com as propriedades corretas', () => {
        render(<CardProduct {...mockProps} />);

        expect(screen.getByText(mockProps.title)).toBeInTheDocument();
        expect(screen.getByText(mockProps.description)).toBeInTheDocument();
        expect(screen.getByText(`R$ ${mockProps.price.toFixed(2)}`)).toBeInTheDocument();
        expect(screen.getByAltText('Tênis Jordan')).toBeInTheDocument();
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', expect.stringContaining('air-jordan-1-mid-dutch-green-1-400.svg'));
    });
});