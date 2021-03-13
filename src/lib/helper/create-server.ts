export default (port:number, upstreamName:String) => `server { 
    listen ${port}
    location / {
        proxy_pass http://${upstreamName}/
    }
}`;
