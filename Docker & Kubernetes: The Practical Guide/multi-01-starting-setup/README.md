To run this project in separate Docker containers:

```shell
# Create network
docker network create goals-net

# Run MongoDB container
docker run -d --rm --name mongodb -v data:/data/db --network goals-net -e MONGO_INITDB_ROOT_USERNAME=my-user -e MONGO_INITDB_ROOT_PASSWORD=secret mongo

# Build backend image
cd ./backend
docker build -t goals-node .

# Run backend container
docker run -d --rm --name goals-backend -v "$(pwd)":/app -v logs:/app/logs -v /app/node_modules -p 80:80 --network goals-net -e MONGODB_USERNAME=my-user -e MONGODB_PASSWORD=secret goals-node

# Build frontend image
cd ../frontend
docker run -it --rm --name goals-frontend -v "$(pwd)/src":/app/src -p 3000:3000 goals-react
```
