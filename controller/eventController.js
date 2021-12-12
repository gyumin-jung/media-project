const connection = require('../db/dbConfig')

const eventCtrl = {
    getEvent:async(req,res)=>{
        console.log(JSON.stringify(req.body.cname));
        connection.query('SELECT * FROM event where cname =?', req.body.cname, function(err, results, fields) {
            if (err) {
              console.log(err);
            }
            console.log(results);
          });
          
    }
}

module.exports = eventCtrl