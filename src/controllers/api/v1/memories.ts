import * as client from "cheerio-httpcli";

import { Request, Response} from "express";

export default (req: Request, res: Response) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    client.fetch(`http://kakaku.com/pc/pc-memory/itemlist.aspx?pdf_ma=833,2238` , (err, $, res) => {

        $('tr.tr-border').each(console.log);
    });
};

// type Memory = {
//     name: string,makers
//     maker: string,
//     price: number,
//     memorySize: string,
//     qty: number,
//     memoryStandard: string,
//     interface: string
// }

