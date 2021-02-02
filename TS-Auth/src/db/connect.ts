import { createConnection  } from 'typeorm';

createConnection().then( () => console.log("CONECTADO COM O BANCO!!")  )

