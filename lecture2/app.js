//first node server
const http=require('http');

//reqeust contains the frontend request we recieve at the sever side
const server=http.createServer((req,res)=>{
  console.log(req);
});

// server.listen(3000);

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`)
})

//localhost:3000