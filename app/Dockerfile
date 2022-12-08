FROM bitnami/express
WORKDIR /app
COPY package.json package-lock.json
COPY package* /app/
COPY . /app/
RUN npm install
COPY . /app
ENTRYPOINT npm run start
