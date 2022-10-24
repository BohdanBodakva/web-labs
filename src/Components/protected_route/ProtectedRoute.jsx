import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({
    component: Component,
    isAuthentificated: isAuthentificated,
    logout: logout
}) {
    return (
        <Route>
            {...rest}
            {props => {
                if (isAuthentificated) {
                    return <Component logout={logout} />
                } else {
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                }
            }}
        </Route>
    )
}