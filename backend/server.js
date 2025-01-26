const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/placementDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  gender: String,
  email: String,
  dob: String,
  mobile: String,
  address: String,
  branch: String,
  tenth: Number,
  twelth: Number,
  ug: Number,
  plang: [String],
  db: [String],
});

const Form = mongoose.model("Form", formSchema);

app.post("/register", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(200).send("Form data saved successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => console.log("Server started on port 5000"));
