#! /bin/bash
docker container stop myXampp
docker container rm myXampp
docker image rm -f myxampp