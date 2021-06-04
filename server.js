const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 6000;
require('dotenv').config();
const encrypt=require("mongoose-encryption");

app.options('*', cors());
app.use(bodyParser.json());
app.use(cors());

//mongoose
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const secret=process.env.SECRET;

var customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    contactNo: String,
    address: String
});

// Data encryption
customerSchema.plugin(encrypt, {secret:secret});

const customers = mongoose.model("customers", customerSchema);

//API routes

app.get("/allCustomers", function(req, res) {
    customers.find().then(customers => res.json(customers));
});

app.post("/addCustomer", function(req, res) {
    console.log("Adding customer to database");
    const newCustomer = new customers({
        name:req.body.name,
        email:req.body.email,
        contactNo:req.body.contactNo,
        address:req.body.address
    });
    newCustomer.save();
    res.redirect('..');
});

if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));
    app.get("*",(req, res) =>{
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    })
}

app.listen(port, function() {
    console.log("express is running");
})