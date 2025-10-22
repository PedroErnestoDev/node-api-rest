import express from 'express'
import ArticleController from '../Controller/ArticleController.js'

const router = express.Router()

router.get("/", ArticleController.getAll)

export default router