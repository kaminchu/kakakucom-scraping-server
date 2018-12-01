import { Request, Response} from "express";

export default (req: Request, res: Response) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    console.log(req);
    res.send(venders);
};

type Vender = {
    id: number,
    name: string
};
const venders: Vender[] = [
    {id: 833, name: "kingston"},
    {id: 2238, name: "G.Skill"}
];
