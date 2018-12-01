import * as client from "cheerio-httpcli";
import { BASE_URL } from "../../config";

type Memory = {
    name: string,
    vender: string,
    shop: string,
    link: string,
    price: null | number,
    memorySize: string,
    qty: null | number,
    memoryStandard: string,
    memoryInterface: string
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
                const jqElement = $(tr);

                // 情報の入っている行だけ
                if(!(jqElement.find("td.alignC").length && tr.children[1].attribs.class === "alignC")){
                    return ;
                }
                const name = jqElement.find("td.alignC > a > img").attr("alt");
                const vender = jqElement.prev().find("td.end.checkItem a.ckitanker > span").text().trim();
                const price = jqElement.find(".td-price > ul > li.pryen > a").text();
                const link = jqElement.find("td.td-price > ul > li.pryen > a").attr("href");
                const shopHtml = jqElement.find(".td-price > ul > li.prshop").html();
                const shop =  shopHtml ? shopHtml.split("<br>")[0].split('<img width="13" height="13" class="vb" src="https://img1.kakaku.k-img.com/images/icon_kaago.gif">')[0] : "";
                const memorySize = jqElement.find("td").eq(8).text();
                const qty = jqElement.find("td").eq(9).first().first().text();
                const memoryStandard = jqElement.find("td").eq(10).first().first().text();
                const memoryInterface = jqElement.find("td").eq(11).find("span.sortBox > a").text();

                const memory: Memory = {
                    name: name,
                    vender: vender,
                    shop: shop,
                    link: link,
                    price: +price.replace(/[^0-9]/g, ''),
                    memorySize: memorySize,
                    qty: +qty.replace(/[^0-9]/g, ''),
                    memoryStandard: memoryStandard,
                    memoryInterface: memoryInterface
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
