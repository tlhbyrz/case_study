import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from "./pages/Home"
import NotFoundScreen from "./pages/Home"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='*' component={NotFoundScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
