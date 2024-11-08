const { default: mongoose } = require("mongoose");

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//Connect to database
mongoose.connect(process.env.MONGODB_URI)
    .then(
    () => {console.log('Connection to mongodb established')},
    err => {console.log(err.reason)('Failed to connect to mongodb')}
    );
    
// Import product routes
const productRoutes = require('./routes/products');

// Use product routes
app.use('/api/products', productRoutes);

//Start the Server
app.listen(port, () =>{
    console.log("Server is up");
})