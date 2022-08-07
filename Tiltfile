# -*- mode: Python -*

k8s_yaml('deployments/frontend-deploy.yaml')
k8s_resource('example-vite-react', port_forwards=5173)

# Add a live_update rule to our docker_build
docker_build('example-vite-react-image', '.',
    build_args={'node_env': 'development'},
    entrypoint='yarn dev',
    live_update=[
        sync('./app', '/app'),
        run('cd /app && yarn install', trigger=['./package.json', './yarn.lock']),
])