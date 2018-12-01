import * as client from "cheerio-httpcli";
import { BASE_URL } from "../../config";

type Memory = {
    name: string,
    maker: string,
    shop: string,
    link: string,
    price: null | number,
    memorySize: string,
    qty: null | number,
    memoryStandard: string,
    interface: string
}

type Query = {
    venders?: number[],
}

export const get =  async (query: Query): Promise<Memory[]> => {
    return new Promise<Memory[]>((resolve, reject) => {
        client.fetch(`${BASE_URL}/pc/pc-memory/itemlist.aspx`, queryConverter(query), (err, $) => {
            if(err){
                reject(err);
            }
            const memories: Memory[] = [];
            $('tr.tr-border').each((i, tr) => {
                // 情報の入っている行だけ
                if(!($(tr).find("td.alignC").length && tr.children[1].attribs.class === "alignC")){
                    return ;
                }
                const name = $(tr).find("td.alignC > a > img").attr("alt");
                const price = $(tr).find(".td-price > ul > li.pryen > a").text();
                const link = $(tr).find("td.td-price > ul > li.pryen > a").attr("href");
                const shopHtml = $(tr).find(".td-price > ul > li.prshop").html();
                const shop =  shopHtml ? shopHtml.split("<br>")[0] : "";
        
                // とりあえず空
                const memory: Memory = {
                    name: name,
                    maker: "",
                    shop: shop,
                    link: link,
                    price: +price.replace(/[^0-9]/g, ''),
                    memorySize: "",
                    qty: null,
                    memoryStandard: "",
                    interface: ""
                };
                memories.push(memory);
            });
            resolve(memories);
        });
    });   
}

type KakakuQuery = {
    pdf_ma?: string
};
const queryConverter = (query: Query): KakakuQuery => {
    return Object.keys(query).reduce((pre, key) => {
        if(key === "venders" && query.venders ){
            return {
                ...pre,
                pdf_ma: query.venders.join(",")
            };
        }
        return pre;
    }, {});
};
