const User = require("../models/user.model.js")

exports.create = (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: "Body is empty"
        })
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    User.create(user, (err, data) => {
        if (err){
            res.status(500).send({
                message: err.message || "server error"
            })
        }
        else {
            res.status(200).send(data);
        }
    })
}

