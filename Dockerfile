FROM node:18-alpine
COPY . .
RUN npm -y install
CMD ["npm", "run", "start"]
