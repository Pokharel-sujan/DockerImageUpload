FROM node

# Create a folder called /app and change directory to it
WORKDIR /app

COPY . /app

RUN npm install -g json-server
