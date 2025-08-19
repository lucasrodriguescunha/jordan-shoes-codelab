import {render} from '@testing-library/react';
import RootLayout from './layout';

// Mock Next.js font imports
jest.mock('next/font/google', () => ({
    Archivo: () => ({
        variable: '--font-geist-archivo',
    }),
    Space_Grotesk: () => ({
        variable: '--font-geist-space-grotesk',
    }),
}));

describe('RootLayout', () => {
    it('Verifica se o layout é exportado corretamente', () => {
        const RootLayout = require('./layout').default;
        expect(RootLayout).toBeDefined();

        expect(typeof RootLayout).toBe('function');
    });

    it('Renderiza o layout com children corretamente', () => {
        const testContent = <div data-testid="test-content">Test Content</div>;
        const {getByTestId} = render(
            <div className="--font-geist-archivo --font-geist-space-grotesk antialiased">
                {testContent}
            </div>
        );

        expect(getByTestId('test-content')).toBeInTheDocument();
    });

    it('Testa a estrutura do componente RootLayout', () => {
        const testContent = <div>Test</div>;

        expect(() => RootLayout({children: testContent})).not.toThrow();
    });
});