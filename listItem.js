class ListItem {
    constructor(name, description, date) {
        this._name = name;
        this._description = description;
        this._date = date;
    }

    toDisplay() {
        let dateString = "-";
        if(this._date) {
            // If not empty, format into proper date
            let date = new Date(this._date);
            let displayOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric" 
            }
            dateString = date.toLocaleDateString("default", displayOptions);
        }

        let displayData = {
            name: this._name,
            description: this._description,
            date: dateString
        }
        return displayData;
    }

}

module.exports = ListItem;