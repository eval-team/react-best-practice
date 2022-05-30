import React, { lazy, Suspense, useCallback, useMemo, useState } from "react";
import './App.scss'

const DemoComponent=lazy(() => import('./demoComponent'))

function App() {
  const [myState, setMyState] = useState(1);

  const calculate = useCallback((number) => {
    return number * 10;
  }, []);

  const memoizedNumber = useMemo(() => {
    return calculate(myState);
  }, [myState, calculate]);

  const handleClick = useCallback(() => {
    setMyState((prevState) => memoizedNumber);
  }, [memoizedNumber]);

  return (
    <div className="App">
      <div>myState: {myState}</div>
      <button onClick={handleClick}>Click</button>
      <Suspense fallback={<p>Loading.....</p>} >
        <DemoComponent />
      </Suspense>
    </div>
  );
}

export default App;
