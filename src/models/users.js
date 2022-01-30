import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'O campo "name" é obrigatório.']
    },
    email:{
        type: String,
        required:[true, 'O campo "e-mail" é obrigatório.']
    },
    password:{
        type: String,
        required:[true, 'O campo "password" é obrigatório.']
    },

})

export default mongoose.models.users || mongoose.model('users', schema)