class List {
    constructor(item = ['one', 'two', 'three', 'four']) {
        this.item = item;
    }

    render() {
        const ul = document.createElement('ul');

        for (let i = 0; i < this.item.length; i++) {
            const li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = this.item[i];
        }
        return ul;
    }
}

const list = new List();
document.body.appendChild(list.render());
