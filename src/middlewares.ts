import { Router } from "express";
import morgan from "morgan";

const router = Router();


router.use(morgan('combined'));

export default router;