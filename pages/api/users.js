import dbConnect from '../../src/utils/dbConnct'

const users = async (req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            //promisse deve ir o método await
            await dbConnect()
            res.status(200).json({ success: true })
            break
    }
}

export default users 