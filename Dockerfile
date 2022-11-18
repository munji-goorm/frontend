#Specify a base image
FROM node:18-alpine as builder
ARG REACT_APP_KAKAOMAP_API_KEY_JS
ENV REACT_APP_KAKAOMAP_API_KEY_JS=$REACT_APP_KAKAOMAP_API_KEY_JS
ARG REACT_APP_KAKAOMAP_API_KEY_REST
ENV REACT_APP_KAKAOMAP_API_KEY_REST=$REACT_APP_KAKAOMAP_API_KEY_REST
ARG REACT_APP_STATION_API_KEY
ENV REACT_APP_STATION_API_KEY=$REACT_APP_STATION_API_KEY

#Specify a working directory
WORKDIR '/app'

#Copy the dependencies file
COPY package.json .

#Install dependencies
RUN npm install

#Copy remaining files
COPY . .

#Build the project for production
RUN npm run build

#Run Stage Start
FROM nginx:1.23.2-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf

#Copy production build files from builder phase to nginx
COPY --from=builder /app/build /usr/share/nginx/html

