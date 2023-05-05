class TestButton extends ModernButton {
    constructor(width, height, background, value, borderRadius) {
        super(width, height, value, background, borderRadius);
    }
    render() {
        const testButton = super.render();
        return testButton;
    }
}

const a = new TestButton(100, 100, 'testDiv', 'red', 40);
document.body.appendChild(a.render());
console.log(a);
