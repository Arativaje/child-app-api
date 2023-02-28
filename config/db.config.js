const mongoose = require('mongoose');

const connect = () => {
    const url = "mongodb+srv://arati:Arati%4011@cluster0.4hm9rak.mongodb.net/test";
    mongoose.connect(url,{

    })
    .then(()=>{
        console.log('Connected to database');
    })
    .catch(()=>{
        
    })
}
module.exports = {
    connect
}