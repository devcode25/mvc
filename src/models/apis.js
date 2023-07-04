import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true},
        diretor: { type: String, required: true},
        dataDeEstreia: { type: String, required: true}
    }
)


const apis = mongoose.model('apis', apiSchema);

module.exports = apis;
