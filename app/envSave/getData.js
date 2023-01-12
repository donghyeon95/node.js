import express from 'express';
// import makeDocument from './makeDoccument.js'
// import saveFile from './saveFile.js'

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
})

export default router;