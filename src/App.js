import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from "./pages/Home"
import NotFoundScreen from "./pages/Home"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Router>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='*' component={NotFoundScreen} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
