const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title  is required"],
  },
  body: {
    type: String,
    default: null,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
