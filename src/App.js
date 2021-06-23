import './App.css';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
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