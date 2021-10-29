const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const app = express();
const port = 5000;

// connection 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l1qze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// console.log(uri);

async function run(){
    try{
        await client.connect();
        console.log("database connected");

    }
    finally{
        // await client.close();

    }
}
run().catch(console.dir);


app.get('/',(req ,res)=>{
     res.send('Hitting database')
 })
app.listen(port ,(req,res)=>{
    console.log('Running Server is',port);
}) 


