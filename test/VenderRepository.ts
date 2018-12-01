import * as client from "cheerio-httpcli";
import { BASE_URL } from "../src/config";

type Vender = {
    id: number,
    name: string
};

export const get =  async (): Promise<Vender[]> => {
    return new Promise<Vender[]>((resolve, reject) => {
        client.fetch(`${BASE_URL}/pc/pc-memory/itemlist.aspx`, (err, $) => {
            if(err){
                reject(err);
            }
            const venders: Vender[] = [];
            $('ul.check.ultop > li > a').each((i, a) => {
                const jqElement = $(a);
                const id = jqElement.attr("href").split("/pc/pc-memory/itemlist.aspx?pdf_ma=")[1];
                console.log(id);
                const name = jqElement.text();
                const vender = {
                    id: +id,
                    name: name
                };
                venders.push(vender);
            });
            resolve(venders);
        });
    });   
}
