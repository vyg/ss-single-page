# Setting up a GraphQL server

Clone the project `git@github.com:vyg/ss-single-page.git`. 
This is a simple SS v4.1 setup with docker, webpack and react and also has the `silverstripe/graphql-devtools` installed.

## Questions to think about.
What does graphql send the server?
How is it the same / different from Rest? 
What are the advantages and disadvantages of using GraphQL?
Where would graphql not work?

And any other thing that confuses you on the way.

### View the current graphql endpoint
By default Silverstripe already has a graphql endpoint setup as this is used in certain
modules in the CMS.

1. Hit the route `/dev/graphiql/`. This tool is available in dev mode only.
2. Click the play button. You will notice there is an authentication error. 
3. In a seperate tab log into the admin
4. Once logged in go back to the `/dev/graphiql` tab, and open up the docs in the top right and corner. Here we can see what is available on the server to query already. You may need to refresh the page. Here you can see that we are able to read files through queries and mutations.

### Tell graphql to make other DataObjects available
We will follow the structure as defined here https://github.com/silverstripe/silverstripe-graphql#exposing-a-dataobject-to-graphql

1. Create a graphql.yml file and define.
```yml
SilverStripe\GraphQL\Controller:
  schema:
    scaffolding:
      types:
        Page:
          fields: '*'
          operations:
            read: true
```
2.  Run a `/dev/build` and go back to graphiql you will see that readPages is now available for querying

There are two approaches to exposing the data to the endpoint - through code or through YAML. YAML is more simple
but the code is more expressive. We will use the YAML setup here.

The main things we need to do is define [Types](https://github.com/silverstripe/silverstripe-graphql#define-types) and [Queries](https://github.com/silverstripe/silverstripe-graphql#define-queries) with a graphql endpoint.


### Features to try
* Add a ['has one' or 'has many' relation](https://github.com/silverstripe/silverstripe-graphql#adding-related-objects)
* [Arguments](https://github.com/silverstripe/silverstripe-graphql#adding-arguments) with [Resolvers](https://github.com/silverstripe/silverstripe-graphql#using-a-custom-resolver).
* [Inheritance](https://github.com/silverstripe/silverstripe-graphql#adding-related-objects)
* [Pagination](https://github.com/silverstripe/silverstripe-graphql#configuring-pagination-and-sorting)
* [Versioned Content](https://github.com/silverstripe/silverstripe-graphql#versioned-content)
  
### Connect to the GraphQL in React
* [Apollo](https://www.apollographql.com/) - Note that the current version is different to the voyage site so 
it is probably better to follow the [Apollo Basic Setup Docs](https://www.apollographql.com/docs/react/basics/setup.html) rather than look at the voyage site as an example.
* [Relay](https://facebook.github.io/relay/)
* Write your own and send [queries as ajax requests](http://graphql.org/graphql-js/graphql-clients/)

### Resources
* [List of all things GraphQL](https://github.com/chentsulin/awesome-graphql)
