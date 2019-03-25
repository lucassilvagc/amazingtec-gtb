import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "../components/Header"
import Img from "gatsby-image"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
	const resolutions = post.featured_media.localFile.childImageSharp.resolutions

	console.log(resolutions)

    return (
      <div>
	  <Header />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                {resolutions &&
                    <div>
                        <Img resolutions={resolutions}/>
                        < img src={resolutions.src} alt=""/>
                    </div>
                }

		<div dangerouslySetInnerHTML={{ __html: post.content }} />
       </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
	  featured_media
	  {
        localFile
		{
            childImageSharp
			{
                resolutions(width:500, height: 200)
				{
                    src
                    width
                    height
                }
            }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
