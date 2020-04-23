npm i request
npm i azure-devops-node-api
npm i express
npm i xmlhttprequest
npm i ejs

or from this folder:
npm i
npm start

then goto localhost:3000 

Also create folowing env vars: 

API_PROJECT = <enter azure devops projectname>
API_PIPELINEID <the pipeline-id see readme.md in git project>
API_TOKEN = <enter azure devops API token that has rights to trigger pipeline>
API_URL = HTTPS://dev.azure.com/<yourazdevopsorg>
TOKEN = <a password/token used in the app that is checked when triggering pipeline. Just set this to 'something' and enter the same in the gui>