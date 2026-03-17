console.log('This is opened using node js')

const fs=require('fs');
fs.writeFile('output.txt','Writing file',(err)=>{
  if(err) console.log("ErrorOccured");
  else console.log("File written successfully");
})