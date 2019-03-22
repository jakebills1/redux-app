import React from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import { connect, } from 'react-redux';

const BlogList = ({ blogs, dispatch}) => (
  <div>
    {blogs.map( blog => (
      <Segment key={blog.id}>
        <Header as="h2">{blog.title}</Header>
        <p>{blog.body}</p>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <Button icon color="red" style={{textAlign: "right"}}
          onClick={() => dispatch({ type: "REMOVE_BLOG", blog })}
          ><Icon name="trash" /></Button>
        </div>
      </Segment>
    ))}
  </div>
)
const mapStateToProps = (state) => {
  return { blogs: state.blogs, }
}
export default connect(mapStateToProps)(BlogList);
