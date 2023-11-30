export async function GET(req, res) {
    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the api page")
    // =================================================
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017/';
    const client = new MongoClient(url);
    const dbName = 'app'; // database name
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('shopping_cart'); // collection name
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    //==========================================================
    // at the end of the process we need to send something back.
    return Response.json(findResult)
    }