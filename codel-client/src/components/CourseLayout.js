import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const CourseLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          paddingTop: 0
        }}
      >
        <main id='learn-app-wrapper'>{children}</main>
      </div>
    </>
  )
}

CourseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CourseLayout
