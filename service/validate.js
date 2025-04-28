
export function checkCreditCardNumber(str) {
    const cardPattern = /^\d{8,16}$/i;
    return cardPattern.test(str);
}

export function checkDateFormatEU(str) {
    const datePattern = /^(((0[1-9])|([12][0-9])|(3[01]))\.((0[1-9])|(1[0-2]))\.\d{4})$/i;
    return datePattern.test(str);
}

export function checkDateFormatUS(str) {
    const datePattern = /^(\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01])))$/i;
    return datePattern.test(str);
}

export function checkPhoneNumber(str) {
    const phonePattern = /^(\+\d{2}\(\d{2}\)\d{4}-\d{4})$/i;
    return phonePattern.test(str);
}

export function checkLessEquals255(str) {
    const pattern = /^((1?\d?\d)|(2[0-4]\d)|(25[0-5]))$/i;
    return pattern.test(str);
}

export function validateEcmascriptText(str) {
    return /^ *ecmascript(1[0-5]?|[1-9]?)$/i.test(str.trim());
}


export function validateDomainZone(str) {
    const domainPattern = /^[a-z0-9._-]+\.(il|com|org)$/i;
    return domainPattern.test(str);
}


export function validateEmail(str) {
    const emailPattern = /^[\w.-]+@[\w.-]+\.[a-z]{2,3}$/i;
    return emailPattern.test(str);
}

export class FibonacciIterator {
    constructor(n) {
        this.n = n;
        this.current = 0;
        this.nextValue = 1;
        this.index = 0;
    }


    next() {
        if (this.index >= this.n) {
            return { done: true };
        }

        const value = this.current;
        const newNextValue = this.current + this.nextValue;
        this.current = this.nextValue;
        this.nextValue = newNextValue;
        this.index++;

        return { value, done: false };
    }


    getSequence() {
        const sequence = [];
        let result = this.next();
        while (!result.done) {
            sequence.push(result.value);
            result = this.next();
        }
        return sequence;
    }


    getSum() {
        const sequence = this.getSequence();
        return sequence.reduce((sum, num) => sum + num, 0);
    }
}


const fibonacci = new FibonacciIterator(8);
console.log('Fibonacci Sequence:', fibonacci.getSequence());
console.log('Fibonacci Sum:', fibonacci.getSum());
