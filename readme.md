# kubernetes-azure-devops-dragdrop
An small node-js app triggering a small Azure-Devops pipeline to deploy multiple HELM-Charts into any Kubernetes cluster. <br/>
In this example it is deploying to an AWS-EKS and an Azure-AKS cluster at the same time. Dragging a HELM-Chart from one cloud to another. <br/>
<br/>
This is done by deploying Azure-Devops agents in the clusters itself. In 4 namespaces there are 4 Azure-Devops agents running. <br/>
Each agent is running in another agent-pool allowing for choice where to deploy. <br/>
<br/>
![](/azdevops.gif)
<br/>
## Try this yourself (you can also run this on minikube with 4 namespaces) <br/>
<br/>
1) Create an Azure-devops organization add a project and within the project add a repo <br/>
   Add all the files from the folder azure-devops-charts-repo to that repo <br/>
   Create a pipeline. The code for the pipeline in is the same folder (azure-pipelines.yml) <br/>
   Create 3 variables in the pipeline: helmaction, helmchart and mypool <br/>
   note the pipelineid number in the url link (see image below). With your pipeline this will be a different number probably <br/>
![](/pipelineid.jpg)
<br/>
