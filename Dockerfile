FROM node:16.16.0

WORKDIR /usr/src/app

RUN npm install -g typescript

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

#Build to project
RUN npm run build

# Run node server
CMD npm run start