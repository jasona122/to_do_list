class ListItem {
    constructor(name, description, date) {
        this._name = name;
        this._description = description;
        this._date = date;
    }

    toDisplay() {
        let displayData = {
            name: this._name,
            description: this._description,
            date: this._date
        }
        return displayData;
    }

}

module.exports = ListItem;