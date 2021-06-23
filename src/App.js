import './App.css';
import SignUp from './components/Auth/SignUp';
import Profile from './components/Profile/Profile';
import PhoneSign from './components/Auth/PhoneSign';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import SignIn from './components/Auth/SignIn';
export const UserContext = createContext();

const App = () => {
  const [authentication, setAuthentication] = useState({
    loggedIn: false,
    email: undefined,
    displayName: undefined,
    photoUrl: undefined,
  })

  return (
    <UserContext.Provider value={[authentication, setAuthentication]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <SignUp />
          </Route>

          <Route path="/signIn">
            <SignIn />
          </Route>

          <Route path="/phoneSign">
            <PhoneSign />
          </Route>

          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>

          <Route exact path="*">
            <SignUp />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;