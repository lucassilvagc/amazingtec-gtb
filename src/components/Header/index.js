import React from 'react'
import Link from 'gatsby-link'
import amz from "./amz.png"


const Header = () => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
        <Link
          to="/posts"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
         <img src={amz} alt="AmazingTec" style={{ 
		  `display: block`, 
		  `margin: 0 auto`, 
		  `float: center`}} />
        </Link>
		
    </div>
  </div>
  
)


export default Header
