const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Form</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    //we are creating the form and using post method to get the info at server
    //action is used to redirect at the desired page given
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male">')
    res.write('</html>');
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="Female" name="gender" value="Female">')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</body>')
    res.write('</html>');
  }
  //after submiting the form we are redirected and rendered the text from the form
  else if(req.url.toLowerCase()==="/submit-details" && req.method=="POST"){
    fs.writeFileSync('user.txt','Mohit Gupta');
    //302 is the command server gave to browser that is should change the location to /
    res.statusCode=302;
    res.setHeader('Location','/');
  } 
})
const PORT=3000;
server.listen(PORT,()=>{
  'server is running in the backend';
})