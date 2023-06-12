import express from 'express';
const router = express.Router();
import {getMovies} from '../components/movies/controller.js'

/* GET users listing. */
router.get('/', getMovies);

export default router;
