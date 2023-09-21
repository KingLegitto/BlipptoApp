# Stage 1: Build the Node.js application
FROM node:20 as build
WORKDIR /app
COPY ./public/ /app/public
COPY ./src/ /app/src
COPY ./package.json /app/
COPY ./tailwind.config.js /app/
COPY ./tsconfig.json /app/
RUN npm install
RUN npm run build

# Stage 2: Create a non-root user in the nginx image
FROM nginx:alpine

# Create a non-root user named "nginxuser" with UID/GID 1000
RUN adduser -D -u 1000 nginxuser

# Copy the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Change ownership of the directories and files to the non-root user
RUN chown -R nginxuser:nginxuser /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# Update nginx configuration to run as the non-root user
RUN sed -i 's/user  nginx;/user  nginxuser;/g' /etc/nginx/nginx.conf

# Expose port 8080
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]