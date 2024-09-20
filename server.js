const express = require ('express');

const app = express();

//endpoint
app.get('/',(req,res)=>{
    res.end("Bienvenidos a mi server");
    console.log(__dirname);
});
//routing

//listening
app.listen(5000,()=>{
    console.log("Wiii")
});