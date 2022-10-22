import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { LoginPage } from './pages/LoginPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { SignupPage } from './pages/SignupPage';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordPage />
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route>
            </Switch>
        </Router>
    );
}