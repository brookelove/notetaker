const HTMLroutes = require('./routes/HTMLroutes');
const APIroutes = require('./routes/APIroutes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//parsing and routing middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//starts the server
app.listen(PORT,() =>{
    console.log('listen to the smooth sounds of port 3000')
})