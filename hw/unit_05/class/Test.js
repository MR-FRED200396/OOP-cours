class Test {
    set testProp(a) {
        this._testProp = a;
    }
    get testProp() {
        return this._testProp;
    }
}

const test = new Test();
test._testProp = 'qwerty';
console.log(test._testProp);
