const request = require('request');
const vsoNodeApi = require('azure-devops-node-api');

const serverUrl = process.env.API_URL;
const token = process.env.API_TOKEN;
var project = process.env.API_PROJECT;
var pipelineid = process.env.API_PIPELINEID;
var exectoken =  process.env.TOKEN;
let authHandler = vsoNodeApi.getPersonalAccessTokenHandler(token);
let AzDO = new vsoNodeApi.WebApi(serverUrl, authHandler, undefined);

var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var path = require('path');
var fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);


app.use(express.static('public'));
//require('./router/server')(app);
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '\views');
app.set('view engine', 'ejs');

async function K2Scmd (helmchart, k8senv, helmaction) {
        var buildApi = await AzDO.getBuildApi();
        const build = await buildApi.queueBuild({
           definition: {
               id: pipelineid //from process.env.API_PIPELINEID. This is the azuredevops pipeline ID (see in azuredevops browser url the numeric ID when you edit the pipeline)
            },
       //parameters:"{\"mypool\":  \"eks-dev\", \"helmchart\":  \"nginx-sample\"}"
            parameters:"{\"mypool\": \""+  k8senv+"\", \"helmchart\":  \""+helmchart+"\",\"helmaction\": \""+helmaction+"\"}"
        }, project);
    try {
        console.log('helmchart = '+ helmchart)
        return('Azure-devops pipeline triggered succesfully!');
    } catch (err) {
        console.error('Error: ', err)
        return('Error. Check server log!');
    }
}

//setInterval(K2Scmd, 3000); //time is in ms

app.get("/K8S", function(httpRequest, httpResponse, next){
    var helmchart =httpRequest.query.helmchart;
    var k8senv =httpRequest.query.k8senv;
    var helmaction =httpRequest.query.helmaction;
    var myownexectoken =httpRequest.query.myexectoken;

    console.log("Trigger pipeline: "+helmchart+', '+k8senv+', '+helmaction);
    if (myownexectoken == exectoken) {

        var myK2Scmd = K2Scmd(helmchart, k8senv, helmaction, myownexectoken)
        myK2Scmd.then(function (result) {
            //httpResponse.send("Moving files: " + blobname)
            httpResponse.send(result);
        });
    } else {
        httpResponse.send('The supplied token is wrong!')
    }
});

app.get("/K8SDELETE", function(httpRequest, httpResponse, next){
    var helmchart =httpRequest.query.helmchart;
    var k8senv =httpRequest.query.k8senv;
    var helmaction =httpRequest.query.helmaction;
    var myownexectoken =httpRequest.query.myexectoken;

    console.log("Trigger pipeline: "+helmchart+', '+k8senv+', '+helmaction);
    if (myownexectoken == exectoken) {

        var myK2Scmd = K2Scmd(helmchart, k8senv, helmaction, myownexectoken)
        myK2Scmd.then(function (result) {
            //httpResponse.send("Moving files: " + blobname)
            httpResponse.send(result);
        });
    } else {
        httpResponse.send('The supplied token is wrong!')
    }
});

app.get('/', function (req, res) {
    res.render('../views/index.html');
});

app.listen(3000, function () {
    var contname = process.env.CONTNAME
    console.log('Listening on port 3000!');
});