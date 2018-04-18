# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Upgrade pip
RUN pip install --upgrade pip

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Add a markdown file with comments
RUN echo 'This is a markdown help file.' > README.md

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME Jonathan

# Run app.py when the container launches
CMD ["python", "app.py"]