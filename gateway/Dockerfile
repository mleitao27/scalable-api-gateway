FROM node:latest
WORKDIR /usr/src/app/gateway
COPY . ./
RUN npm install
EXPOSE 5000
CMD ["npm", "run", "dev"]