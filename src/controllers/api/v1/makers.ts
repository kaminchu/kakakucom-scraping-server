import { Request, Response} from "express";

export default (req: Request, res: Response) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    console.log(req);
    res.send(makers);
};

type Maker = {
    id: number,
    name: string,
    products: ("memory" | "")[]
};
const makers: Maker[] = [
    {id: 833, name: "kingston", products: ["memory"]},
    {id: 2238, name: "G.Skill", products: ["memory"]}
];
