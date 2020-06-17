const express = require("express");
const router = express.Router();
// requete dyal database bach tjbd smiya d khona li tconnecta
// o ghadi tstoriha f chi variable

router.get("/", async (req, res) => {
  res.render("index.ejs", {
    titre: "hamid",
  });
});

module.exports = router;
