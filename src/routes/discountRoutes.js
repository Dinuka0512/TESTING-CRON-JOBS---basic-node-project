const express = require("express");
const router = express.Router();
const { getDiscount } = require("../model/discountModel");

router.get("/discounts", async (req, res) => {
  try {
    const data = await getDiscount();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;