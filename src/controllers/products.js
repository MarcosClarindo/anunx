import path from 'path'
import fs from 'fs'
import ProductsModel from "../models/products";
import dbConnect from '../utils/dbConnect'
import formidable from 'formidable-serverless'


const post = async(req, res) => {
    await dbConnect()

    const form = new formidable.IncomingForm({
        multiples:true,
        uploadDir: 'public/uploads',
        keepExtensions: true,
    })

    form.parse(req, async (error, fields, data) => {
        if(error) {
          return res.status(500).json({success: false})
        }

        const { files } = data

        const filesToRename = files instanceof Array
        ? files
        : [files]

        // salvar imagens no banco de dados
        const filesToSave = []
    
        filesToRename.forEach( file => {
            const timestamp = Date.now()
            const random = Math.floor(Math.random() * 99999999999) + 1
            // pegando qualquer tipo de arquivo
            const extension = path.extname(file.name)

            
            const filename = `${timestamp}_${random}${extension}`

            const oldpath = path.join(__dirname, '../../../../' + file.path)
            const newpath = path.join(__dirname, '../../../../' + form.uploadDir + '/' + filename)

            //salvando imagens no banco de dados
            filesToSave.push({
                name: filename,
                path: newpath,
            })

            
            fs.rename(oldpath, newpath, (error) => {
                if(error){
                    console.log(error)
                    return res.status(500).json({ success: true })
                }
            })
        })

        // dados vindo do formulario
        const {
            title,
            category,
            description,
            price,
            name,
            email, 
            phone,
            userId,
            image,
        } = fields

        // salvando no banco de dados
        const product = new ProductsModel({
            title,
            category,
            description,
            price,
            user: {
                id: userId,
                name,
                email, 
                phone,
                image,
            },
            files: filesToSave,
        })

        const register = await product.save()
        
        if (register){

            res.status(201).json({success: true})
        }else{
            res.status(500).json({ success: false })
        }
        
    })
}

export {
    post
}