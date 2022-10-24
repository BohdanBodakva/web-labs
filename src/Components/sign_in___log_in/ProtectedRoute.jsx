// import React from "react";
// import { Route, Redirect, Router } from "react-router-dom";

// export default function ProtectedRoute({
//     component: Component,
//     isAuthentificated: isAuthentificated,
//     logout: logout,
//     ...rest
// }) {
//     return (
//         <Router>
//             <Route>
//                 {...rest}
//                 render = {props => {
//                     if (isAuthentificated) {
//                         return <Component logout={logout} />;
//                     } else {
//                         return (
//                             <Redirect to={{ pathname: "/", state: { from: props.location } }}
//                     )
//                     }
//                 }}
//             </Route>
//         </Router>
//     )
// }