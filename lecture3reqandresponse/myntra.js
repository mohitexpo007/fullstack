const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);

  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write(`<html lang="en">
    <head>
      <title>Myntra</title>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href="/Home">Home></li>
          <li><a href="/Men">Men></li>
          <li><a href="/Women">Women></li>
          <li><a href="/Kids">Kids></li>
          <li><a href="/Cart">cart></li>
        </ul>
      </nav>
    </body>
    </html>`);
  }else if(req.url.toLowerCase()==='/home'){
    res.write('<h1>Welcome to home</h1>');
  }
  else if(req.url.toLowerCase()==='/men'){
    res.write('<h1>Welcome to men</h1>');
  }
  else if(req.url.toLowerCase()==='/women'){
    res.write('<h1>Welcome to women</h1>');
  }
  else if(req.url.toLowerCase()==='/kids'){
    res.write('<h1>Welcome to kids</h1>');
  }
  else if(req.url.toLowerCase()==='/cart'){
    res.write('<h1>Welcome to cart</h1>');
  }
  res.end();
})

const PORT=3000;

server.listen(PORT,()=>{
  'server is running in the backend'
})