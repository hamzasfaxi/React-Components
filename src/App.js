import React from 'react'
import './App.css';
import ProfilePhoto from './component/profil/ProfilePhoto'
import FullName from './component/profil/FullName';
import Adress from './component/profil/Adress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto />
      </header>
      <body className="body">
       <FullName />
      </body>
      <footer className="footer">
        <Adress />
      </footer>
    </div>
  );
}

export default App;
