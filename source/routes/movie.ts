import express from 'express';
import controller from '../controllers/movie';
const router = express.Router();

//routers that refer to each specific action
router.get('/movies', controller.getAllMovies);
router.get('/movies/:id', controller.getSpecificMovie);

export = router;