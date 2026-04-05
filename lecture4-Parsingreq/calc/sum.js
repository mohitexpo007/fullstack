const sumRequestHandeler=(req,res)=>{
  console.log("IN sum request handeler");
  const body=[];
  req.on('data',chunk=>{
    console.log(chunk);
    body.push(chunk);
  })
  var sum;
  req.on('end',()=>{
    const fullbody=Buffer.concat(body).toString();
    console.log(fullbody);
    const params=new URLSearchParams(fullbody);
    const bodyobject={};
    for(const[key,value] of params.entries()){
      bodyobject[key]=value;
    }

      console.log(bodyobject);
      sum=Number(bodyobject.num1)+Number(bodyobject.num2);
      console.log(sum);
      res.write(`<h1>The sum of num1 and num2 is ${sum}</h1>`)
    
    
  })
  
  
  

}

exports.sumRequestHandeler=sumRequestHandeler;