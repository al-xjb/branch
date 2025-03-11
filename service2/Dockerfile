# service1/Dockerfile
FROM node:16-alpine

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app files
COPY . .

EXPOSE 3003

CMD ["node", "index.js"]
