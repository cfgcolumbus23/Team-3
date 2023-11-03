const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://eric0717:team3@cluster0.pcbgcga.mongodb.net/";

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  //useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: async (callback) => {
    await client.connect();
    console.log("Connected successfully to server");
    _db = client.db("website");
    console.log("Successfully connected to MongoDB");
  },

  getDb: function () {
    return _db;
  },
};