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
   
    // insert data 
    const data = {
        firstname: 'Aanvi',
        lastname: 'Kumar',
        city: 'london',
        phoneNumber: '349999'
    };
    
     const insertResult = await collection.insertOne(data);
     console.log('Inserted documents =>', insertResult);

    // Update data
      const updateResult = await collection.updateOne({ firstname: 'Riya' }, { $set: { city: 'Pune' } });
     console.log('Updated documents =>', updateResult);

    // delete data
    const deleteResult = await collection.deleteMany({ firstname: 'Aanvi' });
    console.log('Deleted documents =>', deleteResult);

    return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());   

       