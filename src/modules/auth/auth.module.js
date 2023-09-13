const router = require("../../router")

const authHandler = require("./auth.handler")

module.exports = {
  name: "auth",

  register: () => {
    router.post("/login", authHandler.login)
    return router
  },
}
