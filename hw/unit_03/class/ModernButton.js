class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius = 0) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }
    render() {
        const modernButton = super.render();
        modernButton.style.borderRadius = `${this.borderRadius}px`;
        return modernButton;
    }
}

const modernButton = new ModernButton(200, 200, 'pink', 'modernButton', 5);
document.body.appendChild(modernButton.render());
console.log(modernButton);
