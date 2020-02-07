FROM node:alpine as build-react
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

#multi stage container
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-react /app/build/ .
CMD ["nginx", "-g", "daemon off;"]

