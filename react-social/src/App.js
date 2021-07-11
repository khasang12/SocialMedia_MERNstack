import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
      </Router>
    </div>
  )
}

export default App;
