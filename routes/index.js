var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/get", function(req, res, next) {
  res.json({
    status: 200,
    message: "get方法获取数据",
    data: []
  });
});

router.post("/post", function(req, res, next) {
  res.json({
    status: 200,
    message: "post方法获取数据",
    data: []
  });
});

module.exports = router;
