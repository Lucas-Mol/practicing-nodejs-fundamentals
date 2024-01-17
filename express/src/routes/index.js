import express from "express"
import dbConnection from "../config/dbConnection.js"
import root from "./rootRoutes.js"
import things from "./thingsRoutes.js"
import origins from "./originsRoutes.js"

await dbConnection()

const routeList = [
    express.json(),
    root,
    things,
    origins
]

const routes = (app) => {
    routeList.forEach(route => {
    app.use(route)
    })
}

export default routes