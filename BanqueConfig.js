const Config = require("./config");
const Params = require("./Params");
const RawFeatures = require("./RawFeatures");


var listConfigs = {};

module.exports = class BanqueConfig{
    constructor(){
        this.listConfigs = []
    }


    creerConfig(nom){
        const id = this.listConfigs.length;
        var c1 = new Config(nom);
        this.listConfigs[id]= c1;
    }

    AjouterParamConfig(id, param, value){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].ajouterParam(param, value);
            } 
        }
    }
    RetirerParamConfig(id, nomparam){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].retirerParam(this.listConfigs[i].getParam(nomparam));
            } 
        }
    }

    AjouterRawConfig(id, nom){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].ajouterRawFeature(nom);
            } 
        }
    }
    RetirerRawConfig(id, nom){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].retirerRaw(this.listConfigs[i].getRaw(nom));
            } 
        }
    }

    ajouterMetrics(id, nomMetric){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].ajouterMetrics(nomMetric);
            } 
        }
    }

    retirerMetrics(id, nomMetric){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].retirerMetrics(nomMetric);
            } 
        }
    }

    ajouterModelName(id, model_name){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].setModelName(model_name);
            } 
        }
    }

    ajouterLearningMode(id, learning_mode){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].setLearningMode(learning_mode);
            } 
        }
    }

    ajouterRawInput(id, raw_input){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i].setRawInput(raw_input);
            } 
        }
    }

    ajouterOptionRawFeatures(id, nom, option){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                this.listConfigs[i]._listRawFeatures.forEach(element => {
                    if(element._nom == nom){
                        element.ajouterOption(option);
                    }
                });
            } 
        }
    }

    retirerOptionRawFeatures(id, nom, option){
        var p1 = new RawFeatures(nom);
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id==id){
                var index = this.listConfigs[i]._listRawFeatures.indexOf(p1);
                this.listConfigs[i]._listRawFeatures[index].removeOptions(option);
            } 
        }
    }

    retirerConfig(id){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id == id){
                this.listConfigs.splice(i,1);
            }
        }
    }

    afficherConfig(id){
        for (let i = 0; i < this.listConfigs.length; i++) {
            if(this.listConfigs[i]._id == id){
                return this.listConfigs[i];
            }
        }
    }
    afficherToutesConfigs(){
        return this.listConfigs;
    }
}