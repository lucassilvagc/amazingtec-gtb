import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import amz from "./amz.png"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/posts"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={amz} alt="AmazingTec" style={{ 
		  display: `block`, 
		  margin: `0 auto`, 
		  float: `center`,}} />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
