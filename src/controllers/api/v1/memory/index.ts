import * as express from "express";

import makers from "./makers";

const router = express.Router();
router.use("/makers", makers);

export default router;