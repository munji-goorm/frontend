FROM node:18-alpine as builder
ENTRYPOINT npm -y install
COPY . .
ENTRYPOINT npm run build

FROM nginx:1.23.2-alpine
ENTRYPOINT rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx/
COPY --from=builder ./build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]