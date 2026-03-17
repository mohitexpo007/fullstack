const http=require('http');
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  //url based web pages using if else if and else this is known as routing
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>This is response of node if case</h1></body>');
    res.write('</html>');
    //use return res.end() so if else is not written direct code is written then 2 times page is sent
    return res.end()

  }else if(req.url==='/about'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>This is response of node about page </h1></body>');
    res.write('</html>');
    return res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>This is response of node else case </h1></body>');
    res.write('</html>');
    return res.end();
  }
})

const PORT=3000;

server.listen(PORT,()=>{
  'server is running'
})

