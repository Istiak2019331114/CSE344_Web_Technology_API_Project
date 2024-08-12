const express = require('express');

const db = require('./db.js');
const app = express();

const ProductsRoute = require('./routes/productRoute.js');
const UserRoute = require('./routes/userRoute.js');
const OrderRoute = require('./routes/orderRoute.js');
const AdminRoute = require('./routes/adminRoute.js');

app.use(express.json());
app.use('/storeAPI/products',ProductsRoute);
app.use('/storeAPI/users/',UserRoute);
app.use('/storeAPI/orders/',OrderRoute);
app.use('/storeAPI/admin/',AdminRoute);


app.get("/",(req,res)=>{
    res.status(200).send("Hello from the server side");
})


const port = process.env.PORT || 8000;
console.log(`server_ecommerce port = ${port}`);

app.listen(port, ()=> "server running on port $port");