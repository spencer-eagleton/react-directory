import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './views/Welcome/Welcome';
import Header from './components/layout/Header';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>
          <Route path="/signin">
            <Auth />
          </Route>
          <Route path="/signup">
            <Auth isSigningUp />
          </Route>
          <Route>
            <Welcome path="/" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </UserProvider>
  );
}
