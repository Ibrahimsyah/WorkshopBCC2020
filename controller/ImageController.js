const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
  destination: "./uploads",
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

module.exports = {
  upload: multer({ storage: diskStorage }),
  uploadFile: (req, res, next) => {
    const filename = req.file.filename;
    res.json({
      success: true,
      filename: filename
    });
  },
  getFile: (req, res, next) => {
    var jsonPath = path.join(__dirname, "..", "uploads", req.params.url);
    res.sendFile(jsonPath);
  }
};
