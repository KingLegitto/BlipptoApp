FROM node:20
WORKDIR /app
COPY ./public/ /app/public
COPY ./src/ /app/src
COPY ./package.json /app/
COPY ./tailwind.config.js /app/
COPY ./tsconfig.json /app/
RUN npm install
CMD ["npm", "start"]
