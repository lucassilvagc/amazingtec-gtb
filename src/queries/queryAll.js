'use strict'
/*
O uso do método allWordpressPage ainda é incerto. A única página que poderia ser pega é a de Política de Privacidade (e só), pois o restante é só categoria.

Ainda assim, a verificar
*/
module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                    title
                    date
					featured_media{
                        localFile{
                            childImageSharp{
                                resolutions(width:500, height: 200){
                                    src
                                    width
                                    height
                                }
                            }
                        }
                }
            }
        }
    }
`