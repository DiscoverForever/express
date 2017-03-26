var path = require('path');
var multer = require('multer');

var upload = multer({
  dest: path.join(path.resolve('./'), '/public/images/')
});

function run(app) {
  app.get('/getPic', (req, res, next) => {
    console.log(req.ip);
    res.sendFile(path.join(path.resolve('./'), '/public/images/node.jpg'));
  });
  app.post('/uploadPic', upload.single('image'), (req, res, next) => {
    res.send(req.name);
  });
}

module.exports = run;