import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ABOUT, CONTACT, HOME, REVOLUTION, SERVICES } from './constants';


const ROUTES = [
  { ...HOME, exact: true, component: ()=><div>Home</div> },
  {
    ...SERVICES,
    exact:true,
    component: () => <h1>Services</h1>,
  },
  {
   ...REVOLUTION,
    exact:true,
    component: () => <h1>Revolution</h1>,
  },
  {
    ...ABOUT,
    exact:true,
    component: () => <h1>About us</h1>,
  },
  {
    ...CONTACT,
    exact:true,
    component: () => <h1>Contact Us</h1>,
  },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
