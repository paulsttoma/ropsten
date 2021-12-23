import Web3 from 'web3';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [addr, setAddr] = useState('')

  function safeMint(){

    const ABI = [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]

    const owner = "0xA8a42DFa45Ef70C33f092D57e8A886b4afE68BA2";

    var contract = new Web3.eth.Contract(ABI,owner);

    console.log(contract);

  }



  
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
        <button onClick={safeMint}>Mint</button>
      </header>
    </div>
  );}

export default App;
