import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { ABOUT, CONTACT, HOME, REVOLUTION, SERVICES } from './constants';

const ROUTES = [
  { ...HOME, exact: true, component: (props) => <LandingPage {...props} /> },
  {
    ...SERVICES,
    exact: true,
    component: () => <h1>Services</h1>,
  },
  {
    ...REVOLUTION,
    exact: true,
    component: () => <h1>Revolution</h1>,
  },
  {
    ...ABOUT,
    exact: true,
    component: () => <h1>About us</h1>,
  },
  {
    ...CONTACT,
    exact: true,
    component: () => <h1>Contact Us</h1>,
  },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  const { path, exact, routes, ...rest } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => (
        <route.component {...props} routes={routes} {...rest} />
      )}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes(props) {
  const { routes, setValue, setSelectedIndex } = props;

  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes
          key={route.key}
          {...route}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      ))}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
