import React from 'react';
import { Header, Form,  } from 'semantic-ui-react';
import { connect, } from 'react-redux';
class BlogForm extends React.Component {
  state = { title: "", body: "", }
  handleChange =(e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, } = this.state;
    const blog = {title, body, }
    this.props.dispatch({ type: "ADD_BLOG", blog })
    this.setState({ title: "", body: "", })
  }
  render() {
    return (
      <div>
        <Header as="h3">New Blog</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            name="title"
            label="Title"
            required
            onChange={this.handleChange}
            value={this.state.title}
            />
            <Form.TextArea
            name="body"
            label="Body"
            required
            onChange={this.handleChange}
            value={this.state.body}
            />
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
export default connect()(BlogForm);
