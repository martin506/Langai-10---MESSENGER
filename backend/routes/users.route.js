module.exports = app => {
    const user = require("../controllers/users.controller.js")

    app.post("/users", user.create)
}
