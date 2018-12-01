import { Request, Response} from "express";

import * as VenderRepository from "../../../../../test/VenderRepository";

export default async (req: Request, res: Response) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    const venders = await VenderRepository.get();
    res.send(venders);
};
