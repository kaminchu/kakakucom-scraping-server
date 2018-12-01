type MemorySize = {
    id: number,
    name: string
};

export const get = async (): Promise<MemorySize[]> => {
    return Promise.resolve(memorySizes);
}; 

const memorySizes: MemorySize[] = [
  {id: 1, name: "1GB"},
  {id: 2, name: "2GB"},
  {id: 4, name: "4GB"},
  {id: 8, name: "8GB"},
  {id: 16, name: "16GB~"},
];
