import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(routes);

console.log("Linsten On: http://127.0.0.1:3333");
app.listen( 3333 );
