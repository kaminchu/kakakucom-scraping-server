type Quantity = {
    id: number,
    name: string
};

export const get = async (): Promise<Quantity[]> => {
    return Promise.resolve(qty);
}; 

const qty: Quantity[] = [
  {id: 1, name: "1枚"},
  {id: 2, name: "2枚"},
  {id: 3, name: "3枚"},
  {id: 4, name: "4枚"},
  {id: 6, name: "6枚"},
  {id: 8, name: "8枚"},
];
