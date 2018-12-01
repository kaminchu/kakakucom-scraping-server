type Vender = {
    id: number,
    name: string
};

export default async (): Promise<Vender[]> => {
    return Promise.resolve(venders);
}; 

const venders: Vender[] = [
    {id: 833, name: "kingston"},
    {id: 2238, name: "G.Skill"}
];