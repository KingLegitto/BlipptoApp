FROM node:20 as build
WORKDIR /app
COPY ./public/ /app/public
COPY ./src/ /app/src
COPY ./package.json /app/
COPY ./tailwind.config.js /app/
COPY ./tsconfig.json /app/
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
#RUN chown -R nginx:nginx  /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
#USER nginx
EXPOSE 8080 
CMD ["nginx", "-g", "daemon off;"]
