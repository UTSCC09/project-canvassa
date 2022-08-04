# Kubernetes

For our kubernetes deployment we have created a helm chart which automatically deploys our container to a cluster.
Our achitecture allows us to be able to autoscale our frontend and our backend infinitely. We use a single pod running
our mongodb database. This can be easily improved by using a cloud service provider.

# Images

We upload our images to docker hub and is located under the user canvassa/c09:tag

# Architecture

### Deployments:
- canvassa-app 
Runs the production react app in one container 
and runs the backend in another container.
- mongo-app
Runs the mongodb server.

### Services:
- canvassa-frontend-service
Acts as a load balancer which redirects traffic
to the frontend of all canvassa pods
- mongo-service
Allows internal communication to the mongodb deployment

### Ingress:
- canvassa-ingress
Ingress rule that maps canvassa.tech domain to canvassa-frontend-service interally

### Secrete:
- tls-config
Stores the tls certs in base64 format

# How to use

If using MiniKube ensure that the nginx ingress controller is enabled using 

```
minikube addons ingress enable
```

If you are connecting to a cloud kubernetes cluster

```
helm install nginx-ingress ingress-nginx/ingress-nginx --set controller.publishService.enabled=true
```

Then go to /kubernetes/helm folder and run this command to deploy it to your cluster

```
helm install canvassa-app canvassa-chart
```

then do the following command to get the external ip.

```
kubectl get ingress
```

connect the deployed app using http://externalip

Depending on your setup you can also portfoward into canvassa-ingress directly