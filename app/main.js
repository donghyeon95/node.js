import express from 'express';
const router = express.Router();

router.post('/post', function (req, res) {
  if (req.body) {
    console.log(JSON.parse(req.body));
  }

  console.log(req.body.name);
  res.send('main home page');
})

router.get('/about', function (req, res) {
  res.send('About Main');
})

export { router as default };
