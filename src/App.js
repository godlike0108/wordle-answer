import { useState } from 'react'
import { ANS } from './constants'
import './App.css';


function App() {
  const [ans, setAns] = useState('')
  const calcWordleAns = () => {
    setAns(ANS[(Math.round((new Date().setHours(0, 0, 0, 0) - new Date(2021, 5, 19, 0, 0, 0, 0).setHours(0, 0, 0, 0)) / 864e5)) % ANS.length])
  }

  return (
    <div className="page">
      <header className="title">
        今天的 Wordle 是什麼答案呢？
      </header>
      <div className="body">{ans}</div>
      <div className="action">
        <button onClick={calcWordleAns}>公佈解答</button>
      </div>
    </div>
  );
}

export default App;
