# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json .env.local ./

# Copy the .env file to the working directory
# Install the dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build:ci

# Expose the port that the Next.js server will listen on
EXPOSE 3000

# Start the Next.js server
CMD [ "node", "server.js" ]