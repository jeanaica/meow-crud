const express = require("express");
const { db } = require("../util/admin");

const router = express.Router();

router.get("/", async (req, res) => {
  const snapshot = db.collection("breeds").get();

  const breeds = [];

  snapshot.forEach(doc => {
    let id = doc.id;

    let data = doc.data();

    breeds.push({ id, ...data });
  });

  res.status(200).send(JSON.stringify(breeds));
});

module.exports = router;
