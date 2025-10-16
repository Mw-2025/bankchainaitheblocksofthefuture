import { useState } from 'react'
import bankchainLogo from './assets/bankchainai.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://bankchainai.net" target="_blank" rel="noopener noreferrer">
          <img src={bankchainLogo} className="logo" alt="BankChainAI logo" />
        </a>
      </div>
      <h1>BankChainAI — Blocks of the Future</h1>
      <p className="tagline">Modular. Credentialized. Sovereign.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Dispatch count: {count}
        </button>
      </div>
      <p>Edit <code>src/App.tsx</code> and save to test cockpit HMR</p>
    </div>
  )
}

export default App