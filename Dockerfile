FROM node:16


ENV HOST=${HOST}
ENV NODE_ENV='production'

EXPOSE 1337
# Create app directory
WORKDIR /app
COPY . .
# Bundle app source
CMD [ "npm", "run", "start"]