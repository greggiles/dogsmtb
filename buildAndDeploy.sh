npm run build
docker build -t registry.gitlab.com/redviking/agv-pd/rv-agv-documentation:latest .
docker push registry.gitlab.com/redviking/agv-pd/rv-agv-documentation:latest 
kubectl --namespace agv-doc rollout restart deploy agv-doc