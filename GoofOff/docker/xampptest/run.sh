#! /bin/bash
docker run --name myXampp -p 41061:22 -p 41062:80 -p 3306:3306 -d -v ~/Development/playground/GoofOff/docker/xampptest/src:/www myxampp