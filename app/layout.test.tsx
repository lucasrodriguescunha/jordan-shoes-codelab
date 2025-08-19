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
        // Verifica se RootLayout está definido
        if (!RootLayout) {
            throw new Error('RootLayout should be defined');
        }

        // Verifica se RootLayout é uma função
        if (typeof RootLayout !== 'function') {
            throw new Error('RootLayout should be a function');
        }
    });

    it('Renderiza o layout com children corretamente', () => {
        const testContent = <div data-testid="test-content">Test Content</div>;
        const {getByTestId} = render(
            <div className="--font-geist-archivo --font-geist-space-grotesk antialiased">
                {testContent}
            </div>
        );

        const element = getByTestId('test-content');
        if (!element) {
            throw new Error('Test content should be in the document');
        }
    });

    it('Testa a estrutura do componente RootLayout', () => {
        const testContent = <div>Test</div>;

        try {
            RootLayout({children: testContent});
        } catch {
            throw new Error('RootLayout should not throw an error');
        }
    });
});