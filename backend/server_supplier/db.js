const mongoose =require('mongoose');

var mongoURL = "mongodb+srv://user:123@cluster0.e6ei2pf.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect( mongoURL,{useUnifiedTopology:true, useNewUrlParser:true});

var db=mongoose.connection;


db.on('connected', ()=>{ console.log("Connection established Mongodb");});
db.on('error', ()=>{console.log("FAILED to connect mongodb")});

module.exports = mongoose;