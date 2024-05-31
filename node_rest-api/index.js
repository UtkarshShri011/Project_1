//This is for the Setting the  server

const express = require("express");

const app =  express();
const PORT = 3000;

//Routes
app.get('/', (req, res) => {res.send('Hello World')});
// call back functions
app.get('/people',(req,res) =>{res.send( "People Were Here")});
app.listen(PORT, () => console.log('Server is started at the Port 3000'));
