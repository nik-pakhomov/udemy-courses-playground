To run this project in separate Docker containers:

```shell
# Create network
docker network create goals-net

# Run MongoDB container
docker run -d --rm --name mongodb --network goals-net mongo

# Build backend image
cd ./backend
docker build -t goals-node .

# Run backend container
docker run -d --rm --name goals-backend -p 80:80 --network goals-net goals-node

# Build frontend image
cd ../frontend
docker run -it --rm --name goals-frontend -p 3000:3000 goals-react
```
