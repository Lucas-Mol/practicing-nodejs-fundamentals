import express from "express"
import root from "./rootRoutes.js"
import things from "./thingsRoutes.js"

const routeList = [
    express.json(),
    root,
    things
]

const routes = (app) => {
    routeList.forEach(route => {
    app.use(route)
    })
}

export default routes