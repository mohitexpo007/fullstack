const {sumRequestHandeler}=require('./sum')

const requestHandler=(req,res)=>{
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write(`<html lang="en">
    <head>
      <title>Calc home</title>
    </head>
    <body> 
    <h1>"Welcome to the home page"<h1>
        <a href="/calculator">Go to calc</a>
    </body>
    </html>`);
    return res.end();
  }
  else if(req.url==='/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
      <head>
      <title>Calculator</title>
      </head>
      <body>
      <h1>"Here is the Calculator</h1>
      <form action="/Calculate_Result"
      method="POST">
      <input type="text" name="num1" placeholder="Enter the first number"><br>
      <input type="text" name="num2" placeholder="Enter the second number"><br>
      <input type="submit" value="Sum">
     </body>
     </html>
      `)
      return res.end();
  }
  else if(req.url==="/Calculate_Result" && req.method==='POST'){
    return sumRequestHandeler(req,res);

}
}
module.exports=requestHandler;