import * as express from "express";

// マスタ情報
import venders from "./venders";

// 検索対象
import memories from "./memories";

const router = express.Router();
router.get("/venders", venders);
router.get("/memories", memories);

export default router;