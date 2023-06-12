import express from 'express';
const router = express.Router();
import { saveUser,updateUser, getUser } from '../components/user/controller.js';
import { userValidate } from '../components/user/user-validate.js';

/* GET users listing. */
router.get('/', getUser);
router.get('/save', userValidate, saveUser);
router.get('/save/:id', updateUser);


export default router;
