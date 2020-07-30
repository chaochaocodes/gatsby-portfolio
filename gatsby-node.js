const path = require("path")

// create pages dynamically
// Node.js file, need to export createPages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  // create a page forEach blog entry
  // page context: pass in variable slug, value of blog.slug 
  // => use variable in blog-template.js
  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}
