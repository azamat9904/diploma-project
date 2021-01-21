import React from 'react';
import "./styles/app.scss";
import { Header } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Home />
      </main>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
