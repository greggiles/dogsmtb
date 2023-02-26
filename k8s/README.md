# OAuth protected VITE deployment

Steps.


Used this article to help: https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/

1. Create Namespace, and Role out Deployment, create Service and Ingress
    >    `kubectl deploy -f deploy.yaml`
1. Lazily copy deployment secret from another namespace
    > `kubectl get secret docker-registry --namespace=argo4-manufacturing -o yaml | sed 's/namespace: .*/namespace: agv-doc/' | kubectl apply -f -`
1. Create Google Project w/ O-Auth Credintials at https://console.cloud.google.com/apis/credentials?project=cloudauth-377721
1. Deploy o-auth proxy
    > ` kubectl deploy -f oaut-proxy.yaml`
