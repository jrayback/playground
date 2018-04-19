# Use an official Node runtime as a parent image
FROM node:8.11.1-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages with npm
RUN npm install

# Make port available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["node", "app.js"]