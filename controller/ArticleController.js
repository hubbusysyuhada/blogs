const { Article } = require('../model/Article')
class ArticleController {
    
    static getAll () {
        return Article.fetchAll()
    }

    static getOne (id) {
        return Article.fetchOne(id)
    }

    static async postArticle (payload) {
        payload.comments = []
        await Article.create(payload)
        return payload
    }

    static async updateArticle (payload) {
        await Article.update(payload)
        payload._id = payload.id
        delete payload.id
        return payload
    }

    static deleteArticle (id) {
        return Article.delete(id)
    }

    static postComment (payload) {
        payload._id = payload.id
        delete payload.id
        return Article.postComment(payload)
    }

}

module.exports = {
    ArticleController
}