class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(number) {
        return typeof number === 'number' ? true : false;
    }
    static isInt(integer) {
        return (integer ^ 0) === integer;
    }
    static isFloat(float) {
        return (float ^ 0) === float ? false : true;
    }
    static isChar(char) {
        return typeof char === 'string' && char.length === 1 ? true : false;
    }
    static isString(string) {
        return typeof string === 'string' ? true : false;
    }
    static isBoolean(boolean) {
        return boolean === true ? true : false;
    }
    static isArray(array) {
        return Array.isArray(array);
    }
    static toMoney(money) {
        let numStr = String(money);
        let fractPart = '';
        let intPart = '';

        if (Number.isInteger(money)) {
            fractPart = '.00';
        } else {
            let a = numStr.lastIndexOf('.');
            fractPart = numStr.substr(a, numStr.length);
        }

        if (numStr.indexOf('.') !== -1) {
            let b = numStr.indexOf('.');
            intPart = numStr.substr(0, b);
        } else {
            intPart = numStr.substr(0, numStr.length);
        }
        let threeСharFromEnd = intPart.substr(-3, intPart.length);
        let charStart = Math.trunc(money / 1000);
        let result = charStart + ' ' + threeСharFromEnd + fractPart;

        return result;
    }
}
