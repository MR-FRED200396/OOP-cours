class Button {
    constructor(
        width = 100.5,
        height = 100.5,
        background = 'green',
        value = 'newButton',
    ) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {
        const createNewButton = document.createElement('button');
        createNewButton.style.background = this.background;
        createNewButton.textContent = this.value;
        createNewButton.style.width = `${this.width}px`;
        createNewButton.style.height = `${this.height}px`;
        return createNewButton;
    }
}

const newButton = new Button();
console.log(newButton);
document.body.appendChild(newButton.render());
