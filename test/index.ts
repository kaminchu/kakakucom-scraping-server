import * as MemoryRepository from "../src/repositories/pc-memory/MemoryRepository";

MemoryRepository.get({venders: [833]}).then(console.log);
