class Test4 extends Test2 {
    set testProp(a) {
        this._testProp = a * 10;
    }
    gettestValue(b) {
        if (b <= 100) return false;
        return b;
    }
}

const test4 = new Test4();
console.log((test4.testProp = 5));
console.log(test4.testProp);
console.log(test4.gettestValue(100));
