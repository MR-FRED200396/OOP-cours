class List3 extends List {
    constructor(item, cssClass = ['text-center', 'bold', 'text-red']) {
        super(item);
        this.cssClass = cssClass;
    }
    render() {
        let ul = super.render();
        this.cssClass.forEach((item) => ul.classList.add(item));
        return ul;
    }
}

const list3 = new List3(
    ['eight', 'nine', 'ten'],
    ['text-center', 'bold3', 'text-red'],
);
document.body.appendChild(list3.render());
