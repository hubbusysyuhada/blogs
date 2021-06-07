const { getDb } = require('../config/mongoconfig')
const { ObjectId } = require('mongodb')

class Article {

    static fetchAll () {
        return getDb().collection('article').find().toArray()
    }

    static fetchOne (id) {
        return getDb().collection('article').find({"_id": ObjectId(id)}).toArray()
    }
    
    static create (payload) {
        return getDb().collection('article').insertOne(payload)
    }

    static update (payload) {
        return getDb().collection('article').update({"_id": ObjectId(payload.id)}, payload)
    }

    static delete (id) {
        return getDb().collection('article').deleteOne({"_id": ObjectId(id)})
    }

    static async postComment (payload) {
        const answer = {
            author: payload.commentAuthor,
            body: payload.commentBody
        }
        await getDb().collection('article').update({"_id": ObjectId(payload.id)}, {$push:{comments: answer}})
        return answer
    }
}

module.exports = {
    Article
}