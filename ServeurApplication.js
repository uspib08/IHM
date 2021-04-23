const express = require('express');
const BanqueConfig = require('./BanqueConfig');

const app = express();
const port = 3000;

let b1 = new BanqueConfig();

app.use(express.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.post('/creerConfig/:nom', function(req,res){
    b1.creerConfig(req.params.nom);
    res.send(b1);
})

app.put('/ajouterparam/:id/:param/:value', function(req,res){
    b1.AjouterParamConfig(req.params.id, req.params.param, req.params.value);
    res.send(b1);
})

app.put('/ajoutermodelname/:id/:modelname', function(req,res){
    b1.ajouterModelName(req.params.id, req.params.modelname);
    res.send(b1);
})

app.put('/ajouterlearningmode/:id/:modelname', function(req,res){
    b1.ajouterLearningMode(req.params.id, req.params.modelname);
    res.send(b1);
})

app.put('/ajouterrawinput/:id/:rawinput', function(req, res){
    b1.ajouterRawInput(req.params.id, req.params.rawinput)
    res.send(b1);
})

app.put('/ajouterrawfeature/:id/:nom', function(req, res){
    b1.AjouterRawConfig(req.params.id, req.params.nom);
    res.send(b1);
})

app.put('/ajouteroptionraw/:id/:nom/:option', function(req,res){
    b1.ajouterOptionRawFeatures(req.params.id, req.params.nom, req.params.option);
    res.send(b1);
})

app.put('/ajouterMetrics/:id/:nomMetric', function(req, res){
    b1.ajouterMetrics(req.params.id, req.params.nomMetric);
    res.send(b1);
})

app.delete('/supprimerParam/:id/:param', function(req, res){
    b1.RetirerParamConfig(req.params.id, req.params.param);
    res.send(b1);
})

app.delete('/supprimerrawfeature/:id/:nom', function(req, res){
    b1.RetirerRawConfig(req.params.id, req.params.nom);
    res.send(b1);
})

app.delete('/supprimerMetric/:id/:nomMetric', function(req,res){
    b1.retirerMetrics(req.params.id, req.params.nomMetric);
    res.send(b1);
})

app.delete('/supprimerConfig/:id', function(req, res){
    b1.retirerConfig(req.params.id);
    res.send(b1);
})

app.delete('/supprimeroptionraw/:id/:nom/:option', function(req, res){
    b1.retirerOptionRawFeatures(req.params.id, req.params.nom, req.params.option);
    res.send(b1);
})

app.get('/afficherConfig/:id', function(req,res){
    res.json(b1.afficherConfig(req.params.id));
})

app.get('/afficherToutesConfigs', function(req, res){
    res.json(b1.afficherToutesConfigs());

})

app.listen(port, () => console.log(`Example app listening on port port!`));