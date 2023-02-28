const express = require('express');
const app = express();
const db = require('./config/db.config');
db.connect();



app.get('/', (req,res)=>{
    res.send('Server Started!');
});

app.listen(3000,()=>{
    console.log('Sever connected successfully');
})