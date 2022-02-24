import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './views/Welcome/Welcome';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import Auth from './views/Auth/Auth';


export default function App() {
  return (
    <BrowserRouter>


    <div className="app">
      <Header />
      <Switch>
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
  );
}
