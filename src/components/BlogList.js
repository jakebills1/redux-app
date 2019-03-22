import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { connect, } from 'react-redux';

const BlogList = ({ blogs, }) => (
  <div>
    {blogs.map( blog => (
      <Segment>
        <Header as="h2">{blog.title}</Header>
        <p>{blog.body}</p>
      </Segment>
    ))}
  </div>
)
const mapStateToProps = (state) => {
  return { blogs: state.blogs, }
}
export default connect(mapStateToProps)(BlogList);