import express from 'express'
import { translate,random } from '../controller/userController.js';

const router=express.Router();

router.route("/translate").post(translate);
router.route("/random").get(random);

export default router;