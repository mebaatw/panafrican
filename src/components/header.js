import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `seagreen`,
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
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div> 
      <Link to="/"  style={{
              color: `white`,
              textDecoration: `none`,
              margin: '10px'
            }}>Home</Link>

        <spn style={{ color: `white`}}>|</spn> 

        <Link to="/collections/"  style={{
              color: `white`,
              textDecoration: `none`,
              margin: '10px'
            }}>Collections</Link>

        <spn style={{ color: `white`}}>|</spn> 

        <Link to="/countries/"  style={{
              color: `white`,
              textDecoration: `none`,
              margin: '10px'
            }}>Search Country</Link>
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
