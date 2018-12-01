import { Request, Response} from "express";

import * as MemoryStandardRepository from "../../../../repositories/pc-memory/MemoryStandardRepository";

export default async (req: Request, res: Response) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    const memoryStandards = await MemoryStandardRepository.get();
    res.send(memoryStandards);
};
