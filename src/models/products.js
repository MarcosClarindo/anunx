import mongoose from 'mongoose'

const filesSchema =  new mongoose.Schema({
    name: String,
    path: String,
})
const schema = new mongoose.Schema({
  title: {
      type: String,
      required: [true, 'O campo "título do anúncio" é obrigatório.'],
  },
  category: {
      type: String,
      required: [true, 'O campo "categoria" é obrigatório.'],
  },
  description: {
      type: String,
      required: [true, 'O campo "descrição" é obrigatório.'],
  },
  price:{
      type: String,
      required: [true, 'O campo "preço" é obrigatório.',]
  },
  // referencia do usuario
  user: {
      id: String,
      name: String,
      email: String,
      phone: String,
      image: String,
  },
  
  files: {
      type: [filesSchema],
      default: undefined,
  }

})

export default mongoose.models.users || mongoose.model('products', schema)