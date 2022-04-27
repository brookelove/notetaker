const express = require("express");
const router = express.Router();
const path = require("path");

// Api routes housed here
const APIroutes = require("./APIroutes");
router.use("/",APIroutes);

// HTML routes housed here
const HTMLroutes = require("./APIroutes");
router.use("/",HTMLroutes);

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
})