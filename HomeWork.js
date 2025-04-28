import {checkLessEquals255, checkCreditCardNumber, checkPhoneNumber, checkDateFormatEU, checkDateFormatUS} from './validate';


describe('checkCreditCardNumber', () => {
    test('check credit card number', () => {
        expect(checkCreditCardNumber("12345678")).toBeTruthy();
        expect(checkCreditCardNumber("1234567887654321")).toBeTruthy();
        expect(checkCreditCardNumber("1234567890")).toBeTruthy();
        expect(checkCreditCardNumber("1234567")).toBeFalsy();
        expect(checkCreditCardNumber("12345678987654321")).toBeFalsy();
        expect(checkCreditCardNumber("12345678A")).toBeFalsy();
    });


})


describe('checkDateFormatEU', () => {
    test('check date format EU', () => {
        expect(checkDateFormatEU("25.01.2018")).toBe(true);
        expect(checkDateFormatEU("30.02.2018")).toBe(true);
        expect(checkDateFormatEU("31.06.2018")).toBe(true);
        expect(checkDateFormatEU("32.01.2018")).toBe(false);
        expect(checkDateFormatEU("12.15.2018")).toBe(false);
        expect(checkDateFormatEU("12/12/2018")).toBe(false);
        expect(checkDateFormatEU("25.01.18")).toBe(false);
        expect(checkDateFormatEU("2018.12.08")).toBe(false);
    });
})


describe('checkDateFormatUS', () => {
    test('check date format US', () => {
        expect(checkDateFormatUS("2018-12-08")).toBe(true);
        expect(checkDateFormatUS("2018-08-12")).toBe(true);
        expect(checkDateFormatUS("2018-08-32")).toBe(false);
        expect(checkDateFormatUS("2018-15-12")).toBe(false);
        expect(checkDateFormatUS("2018-121-12")).toBe(false);
        expect(checkDateFormatUS("2018.12.12")).toBe(false);
    });
})


describe('checkPhoneNumber', () => {
    test('check phone number', () => {
        expect(checkPhoneNumber("+99(01)1234-5678")).toBe(true);
        expect(checkPhoneNumber("99(01)1234-5678")).toBe(false);
        expect(checkPhoneNumber("+099(01)1234-5678")).toBe(false);
        expect(checkPhoneNumber("+99(1)1234-5678")).toBe(false);
        expect(checkPhoneNumber("+99(01)234-5678")).toBe(false);
        expect(checkPhoneNumber("+99(01)1234-56781")).toBe(false);
    });
})


describe('checkLessEquals255', () => {
    test('check less equals 255', () => {
        expect(checkLessEquals255("0")).toBe(true);
        expect(checkLessEquals255("5")).toBe(true);
        expect(checkLessEquals255("58")).toBe(true);
        expect(checkLessEquals255("199")).toBe(true);
        expect(checkLessEquals255("255")).toBe(true);
        expect(checkLessEquals255("256")).toBe(false);
        expect(checkLessEquals255("1000")).toBe(false);
        expect(checkLessEquals255("-2")).toBe(false);
        expect(checkLessEquals255("25b")).toBe(false);
    });
})


