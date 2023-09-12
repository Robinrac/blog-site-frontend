import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreatePost from './CreatePost';
import ReadPosts from './ReadPosts';
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';

const BlogApp = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/create">Skapa inlägg</Link>
          </li>
          <li>
            <Link to="/update">Uppdatera inlägg</Link>
          </li>
          <li>
            <Link to="/delete">Radera inlägg</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/create" component={CreatePost} />
        <Route path="/update" component={UpdatePost} />
        <Route path="/delete" component={DeletePost} />
        <Route path="/" component={ReadPosts} />
      </Switch>
    </Router>
  );
};

export default BlogApp;
