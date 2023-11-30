export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')
  const dob = searchParams.get('dob')

  console.log(email);
  console.log(pass);
  console.log(dob);


 

  // database call goes here


  // database call goes here
// =================================================
const { MongoClient } = require('mongodb');
//const url = 'mongodb://localhost:27017/';
const url =
'mongodb+srv://b00142497:gcYuRl277Qy2vCTJ@cluster0.bhbgotd.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'app'; // database name
await client.connect();
console.log('Connected successfully to server good job:)');
const db = client.db(dbName);
const collection = db.collection('login'); // collection name
const findResult = await collection.find({"username":"sample@test.com"}).toArray();
console.log('Found documents =>', findResult);



let valid = false
if(findResult.length >0 ){
valid = true;
console.log("login valid")
} else {
valid = false;
console.log("login invalid")
}
//==========================================================




  // at the end of the process we need to send something back.
  return Response.json({ "data":"valid" })
}

