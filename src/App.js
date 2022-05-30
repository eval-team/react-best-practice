import React, { useCallback, useMemo, useState } from "react";

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
    <React.Fragment>
      <div>myState: {myState}</div>
      <button onClick={handleClick}>Click</button>
    </React.Fragment>
  );
}

export default App;
