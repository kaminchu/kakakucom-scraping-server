import * as client from "cheerio-httpcli";
import { BASE_URL } from "../../config";

type Memory = {
    name: string,
    vender: string,
    shop: string,
    link: string,
    price: null | number,
    memorySize: string,
    quantity: null | number,
    memoryStandard: string,
    memoryInterface: string
}

type Query = {
    venders?: number[],
    order?: "asc" | "desc",
    memorySize?: number[],
    quantity?: number[],
    memoryStandard?: number[]
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
                const quantity = jqElement.find("td").eq(9).first().first().text();
                const memoryStandard = jqElement.find("td").eq(10).first().first().text();
                const memoryInterface = jqElement.find("td").eq(11).find("span.sortBox > a").text();

                const memory: Memory = {
                    name: name,
                    vender: vender,
                    shop: shop,
                    link: link,
                    price: +price.replace(/[^0-9]/g, ''),
                    memorySize: memorySize,
                    quantity: +quantity.replace(/[^0-9]/g, ''),
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
    pdf_ma?: string,// ベンダー
    pdf_so?: string,// ソート
    pdf_Spec301?: string,// メモリ容量
    pdf_Spec105?: string,// メモリ枚数
    pdf_Spec101?: string,// メモリ規格
};
const queryConverter = (query: Query): KakakuQuery => {
    return Object.keys(query).reduce((pre, key) => {
        if(key === "venders" && query.venders){
            return {
                ...pre,
                pdf_ma: query.venders.join(",")
            };
        }else if (key === "order" && query.order){
            if(query.order === "asc"){
                return {
                    ...pre,
                    pdf_so: "p1"
                };
            }else if(query.order === "desc"){
                return {
                    ...pre,
                    pdf_so: "p2"
                };
            }
            return pre;
        }else if (key === "memorySize" && query.memorySize){
            return {
                ...pre,
                pdf_Spec301: query.memorySize.map(e => e === 16 ? "16-" : "" + e).join(",")
            };
        }else if (key === "quantity" && query.quantity){
            const qtyMap = {//価格com側でidと枚数がグチャグチャなので
                "1": "1",
                "2": "2",
                "3": "4",
                "4": "3",
                "6": "5",
                "8": "8",
            };
            return {
                ...pre,
                pdf_Spec105: query.quantity.map(e => qtyMap["" + e]).join(",")
            };
        }else if (key === "memoryStandard" && query.memoryStandard){
            const qtyMap = {//価格com側でidと規格名がグチャグチャなので
                "0": "5",
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "6",
            };
            return {
                ...pre,
                pdf_Spec101: query.memoryStandard.map(e => qtyMap["" + e]).join(",")
            };
        }
        return pre;
    }, {});
};
