import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from "./pages/Home"
import NotFoundScreen from "./pages/NotFound"
import Header from "./components/Header"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main className="container">
        <Router>
          <Switch>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/anasayfa' component={HomeScreen} exact />
            <Route path='*' component={NotFoundScreen} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
