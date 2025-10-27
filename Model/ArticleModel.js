import { title } from "process";
import db from "../db.js";

export default class ArticleModel {
  static async getAll() {
    const [rows] = await db.query("SELECT * FROM articles");
    return rows;
  }

  static async getArticleById(id) {
    const [rows] = await db.query("SELECT * FROM articles WHERE id = ?", [id]);
    return rows[0];
  }

  static async create({
    user_id,
    title,
    summary,
    cover_image,
    file_path,
    published_at,
  }) {
    const [result] = await db.query(
      `INSERT INTO articles (user_id, title, summary, cover_image, file_path, published_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
      [user_id, title, summary, cover_image, file_path, published_at]
    );

    // Retorna o objeto criado
    return {
      id: result.insertId,
      user_id,
      title,
      summary,
      cover_image,
      file_path,
      published_at,
    };
  }

  static async delete(id) {
    const [result] = await db.execute("DELETE FROM articles WHERE id = ?", [
      id,
    ]);
    // result.affectedRows indica quantas linhas foram deletadas
    return result.affectedRows > 0;
  }
}
