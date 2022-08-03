FROM node:16

WORKDIR /usr/src/app

#Installs Packages
COPY package*.json ./
RUN npm install

#Copies src code over
COPY . .

EXPOSE 3000
CMD ["npm", "start"]