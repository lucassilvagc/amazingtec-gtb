'use strict'
/*
O uso do método allWordpressPage ainda é incerto. A única página que poderia ser pega é a de Política de Privacidade (e só), pois o restante é só categoria.

Ainda assim, a verificar
*/
module.exports = `
query type($marcos: String = "Reviews")
{ 
  allWordpressPost(filter: {categories: {elemMatch: {name: { eq: $marcos }}}} )
  {
    edges 
    {
      node 
      {
        id
        title
        categories 
        {
          id
          name
        }
        slug
        author
        meta
        {
          amp_status
        }
      }
    }
  }
}
`