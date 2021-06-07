const { gql, makeExecutableSchema } = require('apollo-server')
const { ArticleController } = require('../controller/ArticleController')

const typeDefs = gql`
 type Article {
    _id: ID!
    title: String!
    body: String!
    author: String!
    comments: [Comment]
  }

  type Message {
      message: String
  }

  type Comment {
    id: ID!
    author: String!
    body: String
  }

  type Query {
    fetchArticles: [Article]
    fetchArticle (id: ID!) : Article
  }

  type Mutation {
    newArticle (author: String!, title: String!, body: String!) : Article
    updateArticle (id: ID!, author: String!, title: String!, body: String!) : Article
    deleteArticle (id: ID!) : Message
    postComment (id: ID!, commentAuthor: String!, commentBody: String!) : Comment
  }
`

const resolvers = {
    Query: {
        async fetchArticles () {
            return await ArticleController.getAll()
        },
        async fetchArticle (obj, args, context, info) {
            const data = await ArticleController.getOne(args.id)
            return data[0]
        }
    },
    Mutation : {
        async newArticle (obj, args, context, info) {
            return await ArticleController.postArticle(args)
        },
        async updateArticle (obj, args, context, info) {
            return await ArticleController.updateArticle(args)
        },
        async deleteArticle (obj, args, context, info) {
            await ArticleController.deleteArticle(args.id)
            return {message:`successfully delete article id: ${args.id}`}
        },
        async postComment (obj, args, context, info) {
            return await ArticleController.postComment(args)
        }
    }
}

const schema = makeExecutableSchema({typeDefs, resolvers})

module.exports = {
    schema
}