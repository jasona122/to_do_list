class ToDoList {
    constructor() {
        this._items = [];
    }

    add(listItem) {
        this._items.push(listItem)
    }

    remove(itemID) {

    }

    getAllItems() {
        return this._items;
    }
}


module.exports = ToDoList;