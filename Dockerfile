# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code to the working directory
COPY . .

# Expose the application port (e.g., 3000)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]