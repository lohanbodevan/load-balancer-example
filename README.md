# Nginx simple Load Balance configuration
This is a step-by-step nginx configuration to support load balance between multiples server

## Step-by-step
1. Nginx and node server running stand alone
```bash
git checkout 4c54c2e364d5acdbf67554172b32feed3f2af1ad
``` 

2. Make node server private not exposing port
```bash
git checkout 4167087f087b0c6ea3d40943b0bc0d9be18a06c7
``` 

3. Proxy pass nginx http request to node server
```bash
git checkout db7e19a7a0d7fcebeacf0dda85476badc478162b
``` 

4. Configure load balance between two node servers
```bash
git checkout 3ec30a232e2335ecadba481fa553fef6b973fa5d
``` 

**PLUS**
5. Set-up reverse proxy with caching
```bash
git checkout cc7ff25df3ab3c0ab0064599c5f03751089cf6be
``` 
