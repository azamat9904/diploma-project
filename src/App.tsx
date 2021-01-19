import React from 'react';
import "./styles/app.scss";
import { Header } from './components';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        Main
      </main>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
