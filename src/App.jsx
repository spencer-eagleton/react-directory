import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './views/Welcome/Welcome';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import { UserProvider } from './context/UserContext';


export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="profileview">
            <Profile currentUser />
          </Route>
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
        <Footer />
      </div>
    </BrowserRouter>
    </UserProvider>
  );
}
