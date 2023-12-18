export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  /*const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')
  const Address = searchParams.get('Address')
  const Email = searchParams.get('Email')
  const Pass = searchParams.get('Pass')
  const dob = searchParams.get('dob')

  console.log(email);
  console.log(pass);
  console.log(Address);
  console.log(Email);
  console.log(Pass);
  console.log(dob);

  const bcrypt = require('bcrypt);
  const saltRounds = 10;

  const hash = bcrypt.hashSync(pass, saltRounds);



<Box component="form" onSubmit={handleSubmit} noValidate sx={{
mt: 1 }}>
<TextField
margin="normal"
required
fullWidth
id="email"
label="Email Address"
name="email"
autoComplete="email"
autoFocus
/>
*/


  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")
  

const { searchParams } = new URL(req.url)
const email = searchParams.get('email')
const pass = searchParams.get('pass')
const dob = searchParams.get('dob')
console.log(email);
console.log(pass);
console.log(dob);

console.log(email);
console.log(pass);
console.log(dob);



const bcrypt = require('bcrypt');
const saltRounds = 10;

const hash = bcrypt.hashSync(pass, saltRounds);



 

  // database call goes here
// =================================================
const { MongoClient } = require('mongodb');
//const url = 'mongodb://localhost:27017/';
const url =
'mongodb+srv://b00142497:gcYuRl277Qy2vCTJ@cluster0.bhbgotd.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'app'; // database name


await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('login'); // collection name




const findResult = await collection.insertOne({"username": email, "pass":hash, "dob": dob});

console.log(findResult);





//==========================================================



  // at the end of the process we need to send something back.
  return Response.json({ "data":"true" })
}

