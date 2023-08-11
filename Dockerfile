FROM node:16


ENV HOST=${HOST}
ENV NODE_ENV='production'

EXPOSE 1337
# Create app directory
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Bundle app source
CMD [ "npm", "run", "start"]
# FROM node:16.20.1

# ENV HOST=${HOST}
# ENV NODE_ENV=production

# # Add package file
# COPY package.json ./


# # Install deps
# RUN npm install

# # Copy source
# COPY .  .
# # COPY src ./src
# # COPY tsconfig.json ./tsconfig.json
# # COPY client ./client
# # COPY client/tsconfig.json ./client/tsconfig.json

# # Build dist
# RUN npm run build

# # Start production image build

# # Copy node modules and build directory
# COPY --from=base ./node_modules ./node_modules
# COPY --from=base /dist /dist

# # Copy static files
# # NO PUBLIC FILES YET
# # COPY dist/public


# # Expose port 3000
# EXPOSE 1337
# CMD ["dist/index.js"]