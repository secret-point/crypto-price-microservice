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

