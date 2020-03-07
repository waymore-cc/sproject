import React from "react"
import { graphql } from "gatsby"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const content = data.allWordpressWpCaseStudy.edges
    console.log(this.props)
    return (
      <>
        <p>hello</p>

        {content.map(({ node }) => {
          return <div dangerouslySetInnerHTML={{ __html: node.content }} />
        })}

      </>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allWordpressWpCaseStudy {
      edges {
        node {
          content
        }
      }
    }
  }
`
