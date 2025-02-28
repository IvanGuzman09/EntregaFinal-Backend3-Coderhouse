FROM node:20.17.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env .env
EXPOSE 8080
CMD ["npm", "start"]