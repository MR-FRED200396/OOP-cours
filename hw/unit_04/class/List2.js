class List2 extends List {
    constructor(item, cssClass) {
        super(item);
        this.cssClass = cssClass;
    }
    render() {
        let ul = super.render();
        this.cssClass.forEach((item) => ul.classList.add(item));
        return ul;
    }
}
const list2 = new List2(['five', 'six', 'seven'], ['green', 'bold']);
document.body.appendChild(list2.render());
