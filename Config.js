const Params = require("./Params");
const RawFeatures = require("./RawFeatures");


var _listparams;
var _listmetrics;
var _listRawFeatures;
var index = 0;

module.exports = class Config{
    constructor(nom){
        this._id = index++;
        this._nom = nom;
        this._model_name='';
        this._learning_mode='';
        this._listmetrics = [];
        this._listparams = [];
        this._listRawFeatures = [];
        this._raw_input = '';
    }

    setModelName(name){
        this._model_name = name;
    }

    setLearningMode(learning_mode){
        this._learning_mode = learning_mode;
    }

    setRawInput(raw_input){
        this._raw_input = raw_input;
    }

    ajouterParam(nomParam, value){
        var param = new Params(nomParam, value)
        if(!this._listparams.includes(param)){
            this._listparams.push(param);
        }
    }

    getParam(nomparam){
        for (let i = 0; i < this._listparams.length; i++) {
            if(this._listparams[i]._nom==nomparam)
                return this._listparams[i];
        }
    }

    retirerParam(param){
        var i = this._listparams.indexOf(param);
        this._listparams.splice(i,1);
    }

    ajouterMetrics(nomMetric){
        if(!this._listmetrics.includes(nomMetric)){
            this._listmetrics.push(nomMetric);
        }
    }

    retirerMetrics(nomMetric){
        var i = this._listmetrics.indexOf(nomMetric);
        this._listmetrics.splice(i,1);
    }

    ajouterRawFeature(nom){
        var raw = new RawFeatures(nom)
        if(!this._listRawFeatures.includes(raw)){
            this._listRawFeatures.push(raw);
        }
    }

    getRaw(nom){
        for (let i = 0; i < this._listRawFeatures.length; i++) {
            if(this._listRawFeatures[i]._nom==nom)
                return this._listRawFeatures[i];
        }
    }

    retirerRaw(raw){
        var i = this._listRawFeatures.indexOf(raw);
        this._listRawFeatures.splice(i,1);
    }

}