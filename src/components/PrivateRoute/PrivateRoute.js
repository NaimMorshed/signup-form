import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    // eslint-disable-next-line no-unused-vars
    const [authentication, setAuthentication] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
            authentication.loggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;