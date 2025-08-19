import '@testing-library/jest-dom'

// Extend Jest matchers
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeDefined(): R;
            toBe(expected: any): R;
            toThrow(expected?: string | RegExp | Error | jest.Constructable): R;
            // Add jest-dom matchers
            toBeInTheDocument(): R;
        }
    }
}
