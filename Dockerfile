# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_WEATHER_API_KEY = 8720d0d40c084fbebf4211330220908
ENV REACT_APP_WEATHER_BASE_URL = http://api.weatherapi.com/v1

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# Expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]