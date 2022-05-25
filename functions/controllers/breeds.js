const express = require("express");
const { db } = require("../util/admin");

const router = express.Router();

router.get("/", async (req, res) => {
  const snapshot = await db.collection("breeds").get();

  const breeds = [];

  snapshot.forEach(doc => {
    let id = doc.id;

    let data = doc.data();

    breeds.push({ id, ...data });
  });

  res.status(200).send(breeds);
});

router.get("/:category", async (req, res) => {
  const snapshot = await db.collection("breeds").get();
  const category = req.params.category;

  const breeds = [];

  snapshot.forEach(doc => {
    let id = doc.id;

    let data = doc.data();

    if (data.category === category) {
      breeds.push({ id, ...data });
    }
  });

  res.status(200).send(breeds);
});

module.exports = router;
