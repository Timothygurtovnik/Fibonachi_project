import { validateEcmascriptText, validateDomainZone, validateEmail,FibonacciIterator } from './validate.js';

describe('validateEcmascriptText', () => {
    test('should return true if ECMAScript is provided', () => {
        expect(validateEcmascriptText('  ecmascript')).toBe(true);
        expect(validateEcmascriptText('ecmascript')).toBe(true);
        expect(validateEcmascriptText('  ecmascript7')).toBe(true);
        expect(validateEcmascriptText('  ecmascript15')).toBe(true);
        expect(validateEcmascriptText('ECMAScript')).toBe(true);
    });

    test('should return false if ECMAScript is not provided', () => {
        expect(validateEcmascriptText('  ecmascrip')).toBe(false);
        expect(validateEcmascriptText('ecmascript0')).toBe(false);
        expect(validateEcmascriptText('  ecmascript16')).toBe(false);
        expect(validateEcmascriptText('10 ecmascript')).toBe(false);
    });
});

describe('validateDomainZone', () => {
    test('domain is valid', () => {
        expect(validateDomainZone('abrakadabra.il')).toBe(true);
        expect(validateDomainZone('abrakadabra.org')).toBe(true);
        expect(validateDomainZone('abrakadabra.com')).toBe(true);
        expect(validateDomainZone('abra-kadabra.com')).toBe(true);
        expect(validateDomainZone('abra.kadabra.com')).toBe(true);
        expect(validateDomainZone('abra.kadabra2025.com')).toBe(true);
        expect(validateDomainZone('abra_kadabra.com')).toBe(true);
    });

    test('domain is not valid', () => {
        expect(validateDomainZone('abrakadabra.ru')).toBe(false);
        expect(validateDomainZone('.org')).toBe(false);
        expect(validateDomainZone('abrakadabracom')).toBe(false);
        expect(validateDomainZone('abra$kadabra.com')).toBe(false);
    });
});

describe('validateEmail', () => {
    test('email is valid', () => {
        expect(validateEmail('john-smith1990@gmail.com')).toBe(true);
        expect(validateEmail('0@g.uk')).toBe(true);
        expect(validateEmail('john.smith@walla.co.il')).toBe(true);
    });

    test('email is not valid', () => {
        expect(validateEmail('john-smith1990-gmail.com')).toBe(false);
        expect(validateEmail('john@smith1990@gmail.com')).toBe(false);
        expect(validateEmail('@gmail.com')).toBe(false);
        expect(validateEmail('john-smith1990@gmail.m')).toBe(false);
        expect(validateEmail('john$smith1990@gmail.com')).toBe(false);
        expect(validateEmail('john-smith1990@gmail.comerce')).toBe(false);
        expect(validateEmail('john.smith1990@gmail')).toBe(false);
    });
});



describe('FibonacciIterator', () => {
    test('should return correct Fibonacci sequence for 8', () => {
        const fibonacci = new FibonacciIterator(8);
        expect(fibonacci.getSequence()).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('should return correct sum of Fibonacci sequence for 8', () => {
        const fibonacci = new FibonacciIterator(8);
        expect(fibonacci.getSum()).toBe(33);
    });

    test('should return correct Fibonacci sequence for 5', () => {
        const fibonacci = new FibonacciIterator(5);
        expect(fibonacci.getSequence()).toEqual([0, 1, 1, 2, 3]);
    });

    test('should return correct sum of Fibonacci sequence for 5', () => {
        const fibonacci = new FibonacciIterator(5);
        expect(fibonacci.getSum()).toBe(7);
    });
});

