export const addTwo = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;

export default (function dosomeMath() {
    return {
        addTwo,
        multiply,
        subtract,
    };
})();