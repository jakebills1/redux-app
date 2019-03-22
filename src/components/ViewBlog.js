import React from 'react';
import { Segment, Header, Button, Icon, } from 'semantic-ui-react';
const ViewBlog = ({ ...props,}) => {
  return (
    <Segment >
      <h1>{props.location.state.title}</h1>
      <p>{props.location.state.body}</p>
    </Segment>
  )
}


  

export default ViewBlog;