import React from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';


const BlogList = ({ blogs, dispatch}) => (
  <div>
    {blogs.map( blog => (
      <Segment key={blog.id}>
        <Link to={{ pathname: `/blogs/${blog.id}`, state: {...blog}}}>
          <Header as="h2">{blog.title}</Header>
        </Link>
        <p>{blog.body}</p>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <Button icon color="red" style={{textAlign: "right"}}
          onClick={() => dispatch({ type: "REMOVE_BLOG", blog })}
          ><Icon name="trash" /></Button>
        </div>
      </Segment>
    ))}
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", }}>
      <Button as={Link} to="/add" color="blue">Add a new blog</Button>
    </div>
  </div>
)
const mapStateToProps = (state) => {
  return { blogs: state.blogs, }
}
export default connect(mapStateToProps)(BlogList);
