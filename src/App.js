import React, { Fragment, } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import ViewBlog from './components/ViewBlog';
import { Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={BlogList} />
        <Route exact path="/add" component={BlogForm} />
        <Route exact path="/blogs/:id" component={ViewBlog} />
      </Switch>
    </Container>
  </Fragment>


)
export default App;
