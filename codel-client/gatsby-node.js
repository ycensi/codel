const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const {
  createLessonPages,
} = require('./utils/gatsby');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'LessonNode') {
    const { tests = [], title, course } = node;
    const slug = `/lesson/${course}/${title}`;
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'lesson', value: lesson });
    createNodeField({ node, name: 'tests', value: tests });
  }

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    if (!slug.includes('LICENSE')) {
      createNodeField({ node, name: 'slug', value: slug });
      createNodeField({ node, name: 'component', value: component });
    }
  }

}

exports.createPages = function createPages({ graphql, actions, reporter }) {
  
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // Query for all markdown 'nodes' and for the slug we previously created.
    resolve(
      graphql(`
        {
          allLessonNode(
            sort: { fields: [course, lessonOrder] }
          ) {
            edges {
              node {
                title
                name
                fields {
                  slug
                }
                id
                lessonType
                lessonOrder
                course
                template
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          return reject(result.errors);
        }

        // Create challenge pages.
        result.data.allLessonNode.edges.forEach(
          createLessonPages(createPage)
        );

        // Create intro pages
        // result.data.allMarkdownRemark.edges.forEach(edge => {
        //   const {
        //     node: { frontmatter, fields }
        //   } = edge;

        //   if (!fields) {
        //     return null;
        //   }
        //   const { slug, nodeIdentity } = fields;
        //   if (slug.includes('LICENCE')) {
        //     return null;
        //   }
        //   try {
        //     const pageBuilder = createByIdentityMap[nodeIdentity](createPage);
        //     return pageBuilder(edge);
        //   } catch (e) {
        //     console.log(`
        //     ident: ${nodeIdentity} does not belong to a function
        //     ${frontmatter ? JSON.stringify(edge.node) : 'no frontmatter'}
        //     `);
        //   }
        //   return null;
        // });

        return null;
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new MonacoWebpackPlugin()
    ]
  });
};