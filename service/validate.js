
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

export function getFibonacciSequence(n) {
    let sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}


export function getFibonacciSum(n) {
    const sequence = getFibonacciSequence(n);
    return sequence.reduce((acc, val) => acc + val, 0);
}