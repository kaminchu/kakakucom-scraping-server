type Vender = {
    id: number,
    name: string
};

export const get = async (): Promise<Vender[]> => {
    return Promise.resolve(venders);
}; 

const venders: Vender[] = [
  {id: 2238, name: "G.Skill"},
  {id: 694, name: "Corsair"},
  {id: 2210, name: "CENTURY MICRO"},
  {id: 1746, name: "crucial"},
  {id: 138, name: "ADTEC"},
  {id: 238, name: "トランセンド"},
  {id: 833, name: "キングストン"},
  {id: 52, name: "バッファロー"},
  {id: 141, name: "プリンストン"},
  {id: 139, name: "グリーンハウス"},
  {id: 40, name: "IODATA"},
  {id: 2106, name: "ADATA"},
  {id: 3164, name: "ARCHISS"},
  {id: 2083, name: "UMAX"},
  {id: 2092, name: "CFD"},
  {id: 59, name: "ノーブランド"},
  {id: 2147, name: "Silicon Power"},
  {id: 2165, name: "Team"},
  {id: 2278, name: "Patriot Memory"},
  {id: 239, name: "エレコム"},
  {id: 14242, name: "ヤダイ"},
  {id: 93, name: "サムスン"},
  {id: 16940, name: "Antec Memory"},
  {id: 15412, name: "ESSENCORE"},
  {id: 1706, name: "ゲイル"},
  {id: 15663, name: "A2ZEON"},
  {id: 16163, name: "J&A Information"},
  {id: 35, name: "Lenovo"},
  {id: 34, name: "HP"},
  {id: 3343, name: "OCMEMORY"},
  {id: 793, name: "IBM"},
  {id: 8495, name: "V-Color"},
  {id: 2212, name: "SUPER TALENT"},
  {id: 65, name: "パナソニック"},
  {id: 57, name: "NEC"},
  {id: 3935, name: "WINTEN"},
  {id: 843, name: "SK hynix"},
  {id: 706, name: "GALAXY"},
];
