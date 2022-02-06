import bcrypty from 'bcrypt'

// criptografando senha 
const crypto = async pwd => {
    const salt = await bcrypty.genSalt()

    const password = await bcrypty.hash(pwd, salt)

    return password
}
const compare = (pwd, hash) => {
    const result = bcrypty.compare(pwd, hash)

    return result
}


export {
    crypto,
    compare,
}