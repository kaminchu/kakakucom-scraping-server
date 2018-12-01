import * as client from "cheerio-httpcli";

client.fetch(`http://kakaku.com/pc/pc-memory/itemlist.aspx?pdf_ma=833,2238` , (err, $, res) => {

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
    console.log(memories);
});

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
