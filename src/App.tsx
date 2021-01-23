import React from 'react';
import "./styles/app.scss";
import { Header } from './components';
import { Home, Signin, Signup } from './pages';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      {/* <footer className="footer">
        Footer
      </footer> */}
    </div>
  );
}

export default App;
