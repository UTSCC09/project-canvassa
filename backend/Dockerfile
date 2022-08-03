FROM node:16

WORKDIR /usr/src/app

#Installs Packages
COPY package*.json ./
RUN npm install

#Runs Production Build of the Server
RUN npm ci --only=production

#Copies src code over
COPY . .

EXPOSE 5000
CMD ["npx", "serve", "build" ]