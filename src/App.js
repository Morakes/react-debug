import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(count);

  const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10]);

  const count3 = useMemo(() => {
    return count + count2
  }, [count, count2])
  useEffect(() => {
    // console.log("count", count);
    setCount2(count*2)
    
  }, [count])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCount(count + 1)}>
          {`count: ${count}`}
        </button>
        <button>
          {`count2: ${count2}`}
        </button>
        <button>
          {`count3: ${count3}`}
        </button>
        <button onClick={() => setArr(arr.map((val) => val * 2))}>
          {arr}
        </button>
      </header>
    </div>
  );
}

export default App;
