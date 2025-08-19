import '@testing-library/jest-dom'

// Extend Jest matchers
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeDefined(): R;

            toBe(expected: any): R;

            toThrow(expected?: string | RegExp | Error | jest.Constructable): R;
        }
    }
}

// Extend expect for testing-library/jest-dom
declare module '@jest/expect' {
    interface Matchers<R> {
        toBeInTheDocument(): R;
    }
}
