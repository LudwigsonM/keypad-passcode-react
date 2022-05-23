import { useState } from 'react';
import './App.css';

function App() {

  const [pin, setPin]= useState('')
  const [correctPin, setCorrectPin] = useState(false)
  const pinEntered = () => setCorrectPin(!correctPin)
  const num = '9999'
  return (
    <div className="App">
      <header className="App-header">
      <h1>Enter Your Pin {pin} </h1>
    <body>
      <button className="line-1"onClick={()=>setPin(pin + '1')}>1</button>
      <button className="line-1"onClick={()=>setPin(pin + '2')}>2</button>
      <button className="line-1"onClick={()=>setPin(pin + '3')}>3</button>
      <br></br>
      <button className="line-2"onClick={()=>setPin(pin + '4')}>4</button>
      <button className="line-2"onClick={()=>setPin(pin + '5')}>5</button>
      <button className="line-2"onClick={()=>setPin(pin + '6')}>6</button>
      <br></br>
      <button className="line-3"onClick={()=>setPin(pin + '7')}>7</button>
      <button className="line-3"onClick={()=>setPin(pin + '8')}>8</button>
      <button className="line-3"onClick={()=>setPin(pin + '9')}>9</button>
      <br></br>
      <button className="line-4" onClick={()=>setPin('')}>Reset</button>
      <button className="line-4" onClick={()=>setPin(pin + '0')}>0</button>
      <button className="line-4" onClick={() => setCorrectPin( pin === num )}>Enter</button>
      <br></br>
      <h3>{correctPin ? 'Welcome Jinchuriki!':'Incorrect Shinobi'}</h3>
    </body>
      </header>
    </div>
  );
}

export default App;
