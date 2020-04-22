# kubernetes-azure-devops-dragdrop
An small node-js app triggering a small Azure-Devops pipeline, allowing you to deploy multiple HELM-Charts into any Kubernetes cluster. <br/>
In this example I am deploying to an AWS-EKS cluster and an Azure-AKS cluster at the same time. Also dragging a HELM-Chart from one cloud to another. <br/>
<br/>
This is achieved by deploying Azure-Devops agent in the clusters itself. In 4 namespaces there are 4 Azure-Devops agents running as you can see.
<br/>
![](/azdevops.gif)
<br/>
## Try this yourself with multiple K8s clusters (or try it with one minikube cluster and 4 namespaces) <br/>
<br/>


<br/>
