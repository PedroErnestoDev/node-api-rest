import mysql from "mysql2/promise"

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "freelib",
    port: 3306
})

export default db