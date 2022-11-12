// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// se añaden ciertos matchers del DOM a nuestro expect de jest
import "jest-dom/extend-expect";
// resetea nuestros componentes por cada test para que empiecen desde 0
import "react-testing-library/cleanup-after-each";