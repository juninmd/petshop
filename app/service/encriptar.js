const bcrypt = require('bcrypt-nodejs')

module.exports = {
    getPassword: (senha) => {
        return new Promise((resolve, reject) => {
            try {
                let hash = bcrypt.hashSync(senha);
                return resolve({
                    status: 'success',
                    message: hash
                })
            }
            catch (err) {
                return reject({
                    status: 'error',
                    message: err.message
                })
            }
        })
    }
}