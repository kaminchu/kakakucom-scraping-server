import { Request, Response} from "express";

import * as QuantityRepository from "../../../../repositories/pc-memory/QuantityRepository";

export default async (req: Request, res: Response) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    const quantities = await QuantityRepository.get();
    res.send(quantities);
};
