module.exports = app => {
    app.use("/coasters", require("./coasters.routes"))
}