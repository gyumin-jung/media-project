const connection = require('../db/dbConfig')

const userCtrl = {
    getUser:async(req,res)=>{
        connection.query('SELECT * FROM user',(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }
}
module.exports = userCtrl