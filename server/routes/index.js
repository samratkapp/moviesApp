
import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( { title: 'Movies' });
});


export default router;
