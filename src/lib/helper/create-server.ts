export default (port:String, upstreamName:String) => `server { 
    listen ${port}
    location / {
        proxy_pass http://${upstreamName}/
    }
}`;
