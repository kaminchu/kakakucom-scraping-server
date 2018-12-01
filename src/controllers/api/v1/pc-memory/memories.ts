import { Request, Response} from "express";

import * as MemoryRepository from "../../../../repositories/pc-memory/MemoryRepository";

export default async (req: Request, res: Response) => {
    res.header("Content-Type", "application/json; charset=utf-8");

    const memories = await MemoryRepository.get(queryBuilder(req))
    res.send(memories);
};

const queryBuilder = (req) => {
    return Object.keys(req.query).reduce((pre, key) => {
        if(key === "venders" && req.query.venders){
            return {
                ...pre,
                venders: req.query.venders.split(",").map(e => +e)
            };
        }else if(key === "order" && req.query.order){
            return {
                ...pre,
                order: req.query.order
            };
        }else if(key === "memory_size" && req.query.memory_size){
            return {
                ...pre,
                memorySize: req.query.memory_size.split(",").map(e => +e)
            };
        }else if(key === "quantity" && req.query.quantity){
            return {
                ...pre,
                quantity: req.query.quantity.split(",").map(e => +e)
            };
        }
        return pre;
    }, {});

};