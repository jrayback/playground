FROM ubuntu:latest
MAINTAINER Jonathan Rayback "jrayback@gmail.com"

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential

COPY . /app
ENV HOME=/app
WORKDIR /app

RUN pip install -r requirements.txt
RUN pip install gunicorn

EXPOSE 5000

ENTRYPOINT gunicorn -b 0.0.0.0:5000 -w 4 wsgi:app