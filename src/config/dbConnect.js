import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:fullstack25@cluster0.zsu2bp4.mongodb.net/senac2"); 
// A função connect guarda a string de conexão dentro dos parênteses.

let db = mongoose.connection;
//Agora criamos uma variável que guarda a ação de conectar nosso usuário com o mongoDB.

export default db;