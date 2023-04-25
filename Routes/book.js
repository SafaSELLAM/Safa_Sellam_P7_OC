const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const bookCtrl = require("../controllers/book");

router.get("/", bookCtrl.getAllBooks);
router.get("/:id", bookCtrl.getOneBook);

router.get("/bestrating", bookCtrl.getRatings);

// auth requis

router.post("/", auth, bookCtrl.createBook);
router.put("/:id", auth, bookCtrl.updateBook);
router.delete("/:id", auth, bookCtrl.deleteBook);

router.post("/:id/rating", auth, bookCtrl.postRatings);

module.exports = router;
