const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// routes
const cats = require("./controllers/cats");
const breeds = require("./controllers/breeds");

const app = express();
app.use(cors({ origin: true }));

// add routes to the express app.
app.use("/cats", cats);
app.use("/breeds", breeds);

exports.api = functions.region("asia-east1").https.onRequest(app);
