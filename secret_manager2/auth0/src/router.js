import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { SecretPage } from "./pages/SecretPage";
import { SignInPage } from "./pages/SignInPage";

export const RouterProvider = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <PrivateRoute path="/secret">
          <SecretPage />
        </PrivateRoute>
        <Redirect to="/sign-in" />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <>...loading</>;

  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to="sign-in" />}
    </Route>
  );
};