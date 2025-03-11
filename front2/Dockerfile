# Dockerfile for front1
FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy the build output (or entire app) into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Serve the app
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3001"]
