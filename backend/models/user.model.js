const sql = require("../models/db.js");

const User = function(user){
    this.username = user.username
    this.password = user.password
}

User.create = (user, result) => {
    sql.query("INSERT INTO users SET ?", user, (err,res) => {
        if (err){
            console.log(err)
            result(err, null)
            return 
        } 
        result(null, {id: res.insertId, ...user})
    })
}

module.exports = User;