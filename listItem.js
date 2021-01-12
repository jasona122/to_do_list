class ListItem {
    constructor(name) {
        this._name = name;
        this._description;
        this._date;
    }

    addDescription(description) {
        this._description = description;
    }

    addDate(date) {
        this._date = date;
    }

}

module.exports = ListItem;