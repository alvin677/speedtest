if(typeof Bun != 'undefined') { // bun webserver.js
 Bun.serve({
  port: 80,
  fetch(req) {
    return new Response("Bun!");
  },
 });
return;
}
if(typeof Deno != 'undefined') { // deno webserver.js
 Deno.serve({
   port: 80
 }, (req) => {
  return new Response("404 Not found", { headers: { "Content-Type": "text/plain" } });
 });
return;
}
// node webserver.js
const http=require('http2');

let serv=http.createServer((req,res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('ok');
});

serv.listen(80);
