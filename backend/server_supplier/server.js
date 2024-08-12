const express= require('express');
const app= express();
const db=require('./db.js');

const OrderRoute = require('./routes/orderRoute.js');

app.use(express.json());
app.use('/supplyAPI/orders',OrderRoute);

app.get("/",(req,res)=>{
    res.status(200).send("Hello from the supplier server");
})

const port= process.env.port || 7000;
console.log(`server_suppiler port = ${port}`);

app.listen(port, ()=> 'Supply SERVER');