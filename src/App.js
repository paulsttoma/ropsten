import Web3 from 'web3';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [addr, setAddr] = useState('')

  function metamask(){

  if(window.ethereum){

    window.web3 = new Web3(window.ethereum)
    window.ethereum.enable()
    window.ethereum.on('accountsChanged', function (accounts){
      setAddr(accounts[0])

    })
    
  }
  else if (window.web3){
    window.web3 = new Web3(window.web3.currentProvider)
  }
    else{
      window.alert("need eth")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Your metamask wallet: {addr} </p>
        <button onClick={metamask}>Connect MetaMask</button>
      </header>
    </div>
  );
}

export default App;
