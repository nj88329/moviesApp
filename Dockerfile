# Use an official Node.js runtime as a parent image
FROM node:20.10.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Copy the .env file to the working directory
COPY .env ./

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
