import HomePage from "./components/homePage/HomePage"
import CreatePage from "./components/createPage/CreatePage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component={HomePage} /> {/* Home Page */}
        <Route path="/create" component={CreatePost} /> {/* Create Post */}
      </Switch>
    </Router>
      </div>
  
  )
}

export default App