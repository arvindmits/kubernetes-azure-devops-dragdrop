# kubernetes-azure-devops-dragdrop
An small node-js app triggering a small Azure-Devops pipeline to deploy multiple HELM-Charts into any Kubernetes cluster.<br/>
In this example it is deploying to an AWS-EKS and an Azure-AKS cluster at the same time. Dragging a HELM-Chart from one cloud to another.<br/>
<br/>
This is done by deploying Azure-Devops agents in the clusters itself. In 4 namespaces there are 4 Azure-Devops agents running.
Each agent is running in another agent-pool allowing for choice where to deploy.<br/>
<br/>
![](/azdevops.gif)
<br/>
## Try this yourself with multiple K8s clusters (or try it with one minikube cluster and 4 namespaces) <br/>
<br/>


<br/>
