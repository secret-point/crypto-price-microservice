A node.js home task challenge

#soultrain

A microservice that returns the current price of Bitcoin upon request written in Express.js

## How to run

**Step 1:**

Download or clone this repo by using the link below:

```
https://github.com/Jan0418/bitcoin-price-microservice.git
```

**Step 2:**

Go to project root and execute the following command in console to build the Docker image:

```
docker build . -t bitcoin-price-microservice
```

**Step 3:**

Run the following command to run the docker image

```
docker run -p 5000:5000 -d bitcoin-price-microservice
```

## Project Features:

- express
- axios
- dotenv
- node-cache

### Folder Structure

Here is the core folder structure which flutter provides.

```
bitcoin-price-microservice/
|- controllers
|- routes
|- services
|- utils
|- server.js
|- Dockerfile
...
```

Here is the folder structure we have been using in this project

```
1- controllers - Handles incoming requests and returns responses to the client.

2- routes - Associates an HTTP verb, a URL path/pattern.

3- services - Contains main logic such as calling Binance api and modifying it.

4- utils - Contains common file(s) and utilities used in this project

5- server.js - The entry point of the application
```

### controllers

This directory handles incoming requests and returns responses to the client. The folder structure is as follows:

```
controllers/
|- index.js
|- priceController.js
```

### routes

This directory associates an HTTP verb, a URL path/pattern. The folder structure is as follows:

```
routes/
|- index.js
|- route.js
```

### services

Contains main logic such as calling Binance api and modifying it. The folder structure is as follows:

```
services/
|- index.js
|- priceService.js
```

### utils

Contains common file(s) and utilities used in this project. The folder structure is as follows:

```
utils/
|- appCache.js
|- axiosConfig.js
```

### server.js

This is the starting point of the application. All the application level configurations are defined in this file i.e, theme, title, orientation etc.

```javascript
const express = require("express");
const dotenv = require("dotenv");
const { priceRouter } = require("./routes");

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.get("/", (req, res) => res.send("Welcome!"));
app.use("/api", priceRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
```

### Dockerfile

This is the Dockerfile of the application to dockerize the application

```
# Specify the base image
FROM node:18.15.0

# Set environment variables

ENV BINANCE_API_URL=https://api.binance.com/api/v3
ENV SERVER_PORT=5000
ENV UPDATE_FREQUENCY=10000
ENV SERVICE_COMMISSION=0.0001

# Set the working directory inside the container
WORKDIR /usr/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files to the working directory
COPY . .

# Expose the port for the applications
EXPOSE 5000

# Define the command to start the application
CMD ["npm", "start"]


```

## Conclusion

Thanks for viewing my application. 🙏
I'd be happy to hear your thoughts and feedback. 🙂
