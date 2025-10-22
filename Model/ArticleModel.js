import db from "../db.js"

export default class ArticleModel {
    static async getAll(){
        const [rows] = await db.query("SELECT * FROM articles")
        return rows
    }
}