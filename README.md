# kakakucom-scraping-server
This server is scraping kakaku.com to json

## Installation
```sh
yarn install
```

## Getting Started
```sh
yarn build
node ./dist/server.js
```

## Documentation
#### Endpoint list

- /api/v1/pc-memory/memories
  - paramater

  |key|type|example|
  |---|---|---|
  |vender|number[]|`vender=123,356`|
  |order|"asc" &#124; "desc"|`order=asc`|
  |memory_size|number[]|`memory_size=4,8`|
  |quantity|number[]|`quantity=1,2`|
  |memory_standard|number[]|`memory_standard=1,2`|

  - response type
  ```ts
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
  };
  ```

- /api/v1/pc-memory/vender
  - paramater  
    none
  - response type

  ```ts
  type Vender = {
    id: number,
    name: string
  };
  ```

- /api/v1/pc-memory/memory_size
  - paramater  
    none
  - response type

  ```ts
  type MemorySize = {
    id: number,
    name: string
  };
  ```

- /api/v1/pc-memory/quantity
  - paramater  
    none
  - response type

  ```ts
  type Quantity = {
    id: number,
    name: string
  };
  ```

- /api/v1/pc-memory/memory_standard
  - paramater  
    none
  - response type

  ```ts
  type MemoryStandard = {
    id: number,
    name: string
  };
  ```
