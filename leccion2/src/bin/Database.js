var mongoose = require("mongoose");
class Database {
  constructor() {}

  async connect() {
    try {
      await mongoose.connect(
        "mongodb+srv://preposlogsusers:ado123@@@cluster0-8jsv4.mongodb.net/preposlogss?retryWrites=true",
        { useNewUrlParser: true }
      );
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

exports.database = new Database();
