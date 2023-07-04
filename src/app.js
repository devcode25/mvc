import express, { json } from 'express';
import index from './routes/index.js';

const app = express(); // esta variável recebe o express, e será usada em outros arquivos.

app.use(json());
app.use("/", index);


export default app;