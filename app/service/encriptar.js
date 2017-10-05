const bcrypt = require('bcrypt-nodejs')

module.exports = {

    getPassword: ( senha ) => { 

        return new Promise( ( resolve, reject ) => {

            try{
               let hash = bcrypt.hashSync(senha);

               console.log(hash)
               
               resolve({
                   status: 'success',
                   message: hash
               })
            }
            catch( err ){
                console.log(err);
                reject({
                    status: 'error',
                    message: err
                })
            }

        })        
    }

}