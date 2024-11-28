# Usar la imagen oficial de Nginx
FROM nginx:alpine

# Copiar la página web al contenedor
COPY index.html /usr/share/nginx/html/index.html

# Exponer el puerto 80
EXPOSE 80
