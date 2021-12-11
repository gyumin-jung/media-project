const db = require('../db/config')
router.post('/search',(res,req)=>{
    const param = [req.body.email]

    db.query('INSERT INTO member(`email`) VALUES(?)',param,(err,now) =>{
        if(err) console.log(err)
    })    
    res.end()
})