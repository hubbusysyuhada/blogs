const { ApolloServer } = require('apollo-server')
const { schema } = require('./graphql')
const { database, getDb } = require('./config/mongoconfig')
const server = new ApolloServer({schema})

database((err, client) => {
    let db = getDb()
    if (err) console.log(err, '<<< error');
    if (db) {
        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    }
})
