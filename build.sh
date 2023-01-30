# !/bin/bash

yarn react-scripts build

yarn react-snap 

cd build && sed -i 's/http:\/\/localhost:45678//g' $(find . -type f)
