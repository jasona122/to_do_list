class ToDoList {
    constructor() {
        this._items = [];
    }

    add(listItem) {
        this._items.push(listItem)
    }

    remove(itemID) {
        listItem.splice(itemID, 1);
    }

    getAllItems() {
        return this._items;
    }

}

module.exports = ToDoList;