import React from "react";

const CounterMemo = ({ index }) => {
    console.log(`render ${index}`);
    return(
        <div>
            Komponent {index} nigdy się nie zmienia!
        </div>
    );
};

// export default CounterMemo;
export default React.memo(CounterMemo); // High-order component - Komponent nie będzie się renderował razem z innymi => zwiększamy performance!!!