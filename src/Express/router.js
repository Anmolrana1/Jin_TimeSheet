const express = require("express");
const router = express.Router();
const { savedata, getdata } = require("./controller");

router.post("/saveData", savedata);
router.get("/getdata", getdata);

module.exports = router;