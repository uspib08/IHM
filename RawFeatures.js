var _options;

module.exports = class RawFeatures{
    constructor(nom){
        this._nom = nom;
        this._options = []
    }

    ajouterOption(option){
        this._options.push(option);
    }

    removeOptions(option){
        var i = this._options.indexOf(option);
        this._options.splice(i, 1);
    }
}