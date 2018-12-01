import { Request, Response} from "express";

import * as MemorySizeRepository from "../../../../repositories/pc-memory/MemorySizeRepository";

export default async (req: Request, res: Response) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    const memorySizes = await MemorySizeRepository.get();
    res.send(memorySizes);
};
