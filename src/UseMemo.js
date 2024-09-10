import { useState } from "react";
import CounterMemo from "./CounterMemo";

const UseMemo = () => {

    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);
    const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);


    return(
        <div>
            <h2>useMemo()</h2>
            <CounterMemo index={1}/>
            <p>Licznik nr 1 wynosi: {firstCounter}</p>
            <button onClick={increaseFirstCounter}>Zwiększ licznik nr 1</button>
            <hr/>
            <CounterMemo index={2}/>
            <p>Licznik nr 1 wynosi: {secondCounter}</p>
            <button onClick={increaseSecondCounter}>Zwiększ licznik nr 2</button>
        </div>
    );
};

export default UseMemo;