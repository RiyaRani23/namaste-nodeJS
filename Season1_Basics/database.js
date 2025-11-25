const { MongoClient } = require("mongodb");

const url ="mongodb+srv://riyarani23:RiyaRani23@web-cluster23.qihgb1i.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    // Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());   

       