FROM node

# Create a folder called /app and change directory to it
WORKDIR /frontend

COPY ./myapp/package.json /frontend/package.json

COPY . /frontend



ENTRYPOINT ["myentrypoint.sh"]