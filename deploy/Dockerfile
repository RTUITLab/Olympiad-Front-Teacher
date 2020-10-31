FROM nginx:alpine
RUN mkdir /app
COPY /olympiad-front-teacher-build /app
EXPOSE 5504
COPY nginx.conf /etc/nginx/nginx.conf