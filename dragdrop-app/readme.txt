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
API_TOKEN = <enter azure devops API token that has rights to trigger pipeline>
API_URL = HTTPS://dev.azure.com/<yourazdevopsorg>
TOKEN = <a security password/token used in the gui that is checked when triggering pipeline.just set this to 'something' and enter the same in the gui when triggering>