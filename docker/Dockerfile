FROM node:18-alpine

WORKDIR /app

COPY app/ .

RUN npm install 
#&& npm run build

EXPOSE 80

#CMD ["npm", "start"]
CMD ["node", "server.js"]
