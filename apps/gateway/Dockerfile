FROM node:alpine
WORKDIR /app/src
ADD . /app/src
RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*
RUN npm install
# COPY . .
CMD [ "npm", "run", "start" ]