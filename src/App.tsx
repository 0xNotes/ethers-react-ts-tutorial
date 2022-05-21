import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';


function App() {

  const [buttonText, setButtonText] = useState('Connect Wallet');
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");



  const connectWalletHandler = () => {
    if ((window as any).ethereum) {
      (window as any).ethereum.request({ method: 'eth_requestAccounts' })
        .then((result: any) => {
          //Provides a list of connected eth
          accountChangedHandler(result[0]);
          setButtonText('Wallet Connected');
        })
    } else {
      setErrorMessage("Please Install A Wallet!");
    }
  }

  const accountChangedHandler = (newAccount: React.SetStateAction<null>) => {
    setDefaultAccount(newAccount);
  }


  return (
    <div className="App">
      <NavBar
        connectWalletHandler={connectWalletHandler}
        buttonText={buttonText} />

      {defaultAccount ?
        (<div className='Container'>
          Welcome {defaultAccount}
        </div>)
        :
        (<div className='Container'>
          No Wallet Connected
        </div>)}

    </div>
  );
}

export default App;
