const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");

const router = require('./routes')

const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);


app.use('/auth', router)

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});
