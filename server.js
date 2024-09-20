const express = require('express');

const app = express();

//Endpoint
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/view/index.html"); 
});

//Routing
app.use('/src', express.static(__dirname + "/src"));
app.use('/css',express.static(__dirname + "/css"));
app.use('/view', express.static(__dirname + "/view"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

//listening
app.listen(5000, () => {
    console.log("Wiii");
});
