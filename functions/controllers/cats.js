const express = require("express");
const { db } = require("../util/admin");

const router = express.Router();

router.get("/", async (req, res) => {
  const snapshot = await db.collection("cats").get();

  const cats = [];

  snapshot.forEach(doc => {
    let id = doc.id;
    console.log(doc, "doc");

    let data = doc.data();

    cats.push({ ...data, id });
  });

  res.status(200).send(JSON.stringify(cats));
});

router.get("/:id", async (req, res) => {
  const snapshot = await db.collection("cats").doc(req.params.id).get();

  const catId = snapshot.id;
  const catsData = snapshot.data();

  res.status(200).send(
    JSON.stringify({
      ...catsData,
      id: catId,
    })
  );
});

router.put("/:id", async (req, res) => {
  const body = req.body;

  try {
    await db
      .collection("cats")
      .doc(req.params.id)
      .update({ ...body });

    res.status(200).send(
      JSON.stringify({
        id: req.params.id,
        ...body,
      })
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  await db.collection("cats").doc(req.params.id).delete();

  res.status(200).send("Success");
});

router.post("/", async (req, res) => {
  try {
    await db.collection("cats").add(req);

    res.status(201).send({
      success: true,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
