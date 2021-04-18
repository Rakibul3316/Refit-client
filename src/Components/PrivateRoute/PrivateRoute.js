import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ServiceContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const { value, value2 } = useContext(ServiceContext);

    const [loggedInUser, setLoggedInUser] = value2;

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;