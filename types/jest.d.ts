import '@testing-library/jest-dom'

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeDefined(): R;

            toBe(expected: any): R;

            toBeInTheDocument(): R;

            toThrow(expected?: string | RegExp | jest.Constructable | Error): R;
        }
    }
}
