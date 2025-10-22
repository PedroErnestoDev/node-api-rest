import ArticleModel from "../Model/ArticleModel.js";

export default class ArticleController {
    static async getAll(req, res){
        const articles = await ArticleModel.getAll()
        res.json(articles)
    }
}