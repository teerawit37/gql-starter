var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');
var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLString = graphql.GraphQLString;
var products = require('./data');
var app = express();
var PORT = process.env.port || 3000
var queryType = new GraphQLObjectType({
  name: "queryProduct",
  description: "query of product",
  fields: () => ({
    hey: {
      type: GraphQLString,
      resolve: function(_, args){
        return "hello world"
      }
    }
  })
});
var MyGraphQLSchema = new GraphQLSchema({
  query: queryType
});
app.use('/graphql', graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}));
app.listen(PORT);
console.log("Server running on localhost:", PORT);