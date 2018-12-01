import * as express from "express";

// マスタ情報
import makers from "./makers";

// 検索対象
import memories from "./memories";

const router = express.Router();
router.use("/makers", makers);
router.use("/memories", memories);

export default router;