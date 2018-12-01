type MemoryStandard = {
    id: number,
    name: string
};

export const get = async (): Promise<MemoryStandard[]> => {
    return Promise.resolve(memoryStandards);
}; 

const memoryStandards: MemoryStandard[] = [
  {id: 6, name: "DDR4 SDRAM"},
  {id: 3, name: "DDR3 SDRAM"},
  {id: 2, name: "DDR2 SDRAM"},
  {id: 1, name: "DDR SDRAM"},
  {id: 5, name: "SDRAM"},
];
