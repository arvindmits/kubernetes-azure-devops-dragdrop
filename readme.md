# kubernetes-azure-devops-dragdrop
An small node-js app triggering a small Azure-Devops pipeline to deploy multiple HELM-Charts into any Kubernetes cluster. <br/>
In this example it is deploying to an AWS-EKS and an Azure-AKS cluster at the same time. Dragging a HELM-Chart from one cloud to another. <br/>
<br/>
This is done by deploying Azure-Devops agents in the clusters itself. In 4 namespaces there are 4 Azure-Devops agents running. <br/>
Each agent is running in another agent-pool allowing for choice where to deploy. <br/>
<br/>

![](media/azdevops.gif)

<br/>
Try this yourself (you can also run this on minikube with 4 namespaces) <br/>
<br/>
<<<<<<< HEAD
1) Azuredevops <br/>

-Create an Azure-devops organization, add a project and within the project add a repo <br/>
-Add all the files from the folder azure-devops-charts-repo to that repo <br/>
   
-Create a pipeline. The code for the pipeline in is the same folder (azure-pipelines.yml) <br/>
-Create 3 variables in the pipeline: helmaction, helmchart and mypool <br/>
-Note the pipelineid number in the url link (see image below). <br/>

![](media/pipeline.png)

-Create 4 agent pools (eks-dev, eks-tst, aks-dev and aks-tst)

![](media/agentpools_small.png)

-Create an access token

![](media/pat.png) <br/>

2) 
Kubernetes <br/>

-Create 4 namespaces either in 2 K8s clusters (AWS, EKS, GKE) or in minikube or wherever. See the K8s-yamls folder <br/>
-Extend the rights of the default account so that that account can deploy resources in the namespaces (rights.yaml)<br/>

-Deploy the az-devops-agent yamls but make sure the values there are filled in: 

![](media/values2.png)

Optionally build your own dockerfile for azdevops agent (see ...docker-image folder)
=======
1) Create an Azure-devops organization add a project and within the project add a repo <br/>
   Add all the files from the folder azure-devops-charts-repo to that repo <br/>
   Create a pipeline. The code for the pipeline in is the same folder (azure-pipelines.yml) <br/>
   Create 3 variables in the pipeline: helmaction, helmchart and mypool <br/>
   note the pipelineid number in the url link (see image below). With your pipeline this will be a different number probably <br/>
   
![pipelineid](/pipeline.gif)

>>>>>>> cfb99654c3b7d27d1d749df354d9d9c8afd481c4
<br/>
3)
The dragdrop app <br/>
On the environment where you run the app set these env vars:

API_PROJECT = *enter azure devops projectname* <br/>
API_PIPELINEID = *the pipeline id you noted at step 1* 
API_TOKEN = *enter azure devops API token that has rights to trigger pipeline* <br/>
API_URL = HTTPS://dev.azure.com/*yourazdevopsorg* <br/>
TOKEN = *a password/token used in the app that is checked when triggering pipeline. Just set this to 'something' and enter the same in the gui* <br/>

Install npm / nodejs

from the dragdrop-app folder open a command prompt:
npm i
npm start

then goto localhost:3000 
Make sure you enter the token here before drag and dropping:

![](media/token.png)

That should be it.
Let me know if there is an issue
