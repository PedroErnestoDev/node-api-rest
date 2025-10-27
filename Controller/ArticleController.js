import { userInfo } from "os";
import ArticleModel from "../Model/ArticleModel.js";
import { error } from "console";

export default class ArticleController {
  static async getAll(req, res) {
    const articles = await ArticleModel.getAll();
    res.json(articles);
  }

  static async getArticleById(req, res) {
    const { id } = req.params;
    const article = await ArticleModel.getArticleById(id);
    if (!article)
      return res.status(404).json({ message: "Article não encontrado" });
    res.json(article);
  }

  static async create(req, res) {
    try {
      const { user_id, title, summary, cover_image, file_path, published_at } =
        req.body;

      if (!user_id) {
        return res.status(400).json({ error: "user_id é obrigatório" });
      }

      const publishedAt = published_at
        ? new Date(published_at).toISOString().slice(0, 19).replace("T", " ")
        : null; // caso queira permitir nulo

      const newArticle = await ArticleModel.create({
        user_id,
        title,
        summary,
        cover_image,
        file_path,
        published_at: publishedAt,
      });

      res.status(201).json(newArticle);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await ArticleModel.delete(id);

      if (!deleted) {
        return res.status(404).json({ message: "Article não encontrado" });
      }

      return res.status(200).json({ message: "Article deletado com sucesso" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}
