import * as express from "express";

import pc_memory from "./pc-memory/index";

const router = express.Router();
router.use("/pc-memory", pc_memory);

export default router;