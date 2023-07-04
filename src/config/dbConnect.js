import mongoose from 'mongoose';

mongoose.connect(); 
// A função connect guarda a string de conexão dentro dos parênteses.

let db = mongoose.connection;
//Agora criamos uma variável que guarda a ação de conectar nosso usuário com o mongoDB.

module.exports = db;