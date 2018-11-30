import * as express from "express";

import memory from "./memory/index";

const router = express.Router();
router.use("/memory", memory);

export default router;