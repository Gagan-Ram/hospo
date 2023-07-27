const express = require("express");
const app = express();
const path = require('path')
const dotenv = require('dotenv').config(path.join(__dirname, '../.env'))

const cors = require('cors')

const mongoose = require('mongoose')

const hospoRoutes = require('./routes/index.routes')

const DB_URI = process.env.DB_URI
const PORT = process.env.SERVER_PORT

mongoose
  .connect(`${DB_URI}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((e) => console.log("Failed to connect to DB", e));


app.use(cors());
app.options("*", cors());

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(express())

app.use("/v1", hospoRoutes)

app.listen(PORT, console.log(`Server started on port http://localhost:${PORT}/v1`));
