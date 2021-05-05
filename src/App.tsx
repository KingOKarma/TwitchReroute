import React from 'react';
import './App.css';
import Header from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src="https://i.imgur.com/DXR4sCI.png" className="App-logo" alt="KFCBucketboyLogo" />
        <p className="MainText">
          Thank you for authorizing! Please get in contact with <a href="https://github.com/KingOKarma"> KingOKarma </a> if you have any problems!
        </p>
        <p className="MainText">
        Or you can contact him on discord via <code>King Of Karma#0069</code>
        </p>
      </header>
    </div>
  );
}

export default App;
