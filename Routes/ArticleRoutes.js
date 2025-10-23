import express from 'express'
import ArticleController from '../Controller/ArticleController.js'

const router = express.Router()

router.get("/", ArticleController.getAll)
router.get("/:id", ArticleController.getArticleById)
router.post("/", ArticleController.create)

export default router