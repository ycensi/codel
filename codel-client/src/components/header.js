import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: "40px",
      display: "flex",
      backgroundColor: "#a22c23",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        textDecoration: `none`,
      }}
    >
      <h4
        style={{
          margin: "auto 0",
          fontWeight: "normal",
          color: "#FFF",
          paddingLeft: "15px",
        }}
      >
        {siteTitle}
      </h4>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
