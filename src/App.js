import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from "./pages/Home"
import NotFoundScreen from "./pages/NotFound"
import Header from "./components/Header"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Header />
        <main className="container">
            <Switch>
              <Route path='/' component={HomeScreen} exact/>
              <Route path='/products/:page' component={HomeScreen} />
              <Route path='*' component={NotFoundScreen} />
            </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
