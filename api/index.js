import express from 'express';
import testData from '../src/testData';

const router = express.Router();

router.get('/testdata', (req, res) => {
  res.send({ testData });
});

export default router;
