server {
    listen 80;
    server_name magicprintsmedia.com www.magicprintsmedia.com;

    # Increase upload size if needed
    client_max_body_size 50M;

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_cache_bypass $http_upgrade;
    }
}


---------------------commads to run 
1) sudo ln -s /etc/nginx/sites-available/magicprintsmedia.com /etc/nginx/sites-enabled/
2) sudo nginx -t
3) sudo systemctl reload nginx

4) pm2 start npm --name "magicprintsmedi" -- start
   pm2 save

5) sudo certbot --nginx -d magicprintsmedia.com -d www.magicprintsmedia.com
