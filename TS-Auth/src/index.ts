import express from 'express';
import routes from './routes';
import './db/connect';
import 'reflect-metadata';

const app = express();

app.use( express.json( ) );

app.use( routes );

app.listen ( 3333 , () => {
	console.log('SERVER AT : http://127.0.0.1:3333');
});
