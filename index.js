// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// require("dotenv").config();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connection Successful");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server Started on Port ${process.env.PORT}`);
// });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Successful");

    // Check connection state
    const connectionStatus = mongoose.connection.readyState;
    console.log(`MongoDB Connection State: ${connectionStatus}`);
  })
  .catch((err) => {
    console.log("DB Connection Error:", err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
